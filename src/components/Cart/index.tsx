import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'

import { RootReducer } from '../../store'
import { parseToBrl } from '../../utils'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

enum ChangeContent {
  CART = 'cart',
  DELIVERY = 'delivery',
  PAYMENT = 'payment'
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [mode, setMode] = useState<ChangeContent>(ChangeContent.CART)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      cep: '',
      adressNumber: '',
      adressComplement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(10, 'O endereço precisa ter pelo menos 10 caracteres')
        .required('O campo é obrigatório'),
      adressNumber: Yup.string()
        .min(1, 'O número do endereço precisa ter pelo menos 1 caractere')
        .required('O campo é obrigatório'),
      adressComplement: Yup.string(),
      city: Yup.string()
        .min(4, 'O nome da cidade precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O cep precisa ter pelo menos 9 caracteres')
        .max(9, 'O cep precisa ter pelo menos 9 caracteres')
        .required('O campo é obrigatório'),
      cardDisplayName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log('Formulário enviado!', values)
      purchase({
        delivery: {
          receiver: values.receiver,
          adress: {
            description: values.adress,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.adressNumber),
            complement: values.adressComplement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.price
        }))
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
    setMode(ChangeContent.CART)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, currentItem) => {
      if (currentItem.price) {
        return (acumulador += currentItem.price)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleSubmit = () => {
    form.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        alert('Por favor, preencha todos os campos corretamente!')
      }
    })
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isInvalid && isTouched

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {isSuccess && data ? (
          <S.ConfimOrder>
            <S.SidebarTitle>Pedido realizado - {data.orderId} </S.SidebarTitle>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button
              onClick={closeCart}
              type="button"
              title="Clique aqui para concluir"
            >
              Concluir
            </Button>
          </S.ConfimOrder>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {(() => {
              if (mode === ChangeContent.CART) {
                return (
                  <>
                    {items.length > 0 ? (
                      <>
                        <ul>
                          {items.map((item) => (
                            <S.CartItem key={item.id}>
                              <img src={item.image} alt={item.title} />
                              <div>
                                <h3>{item.title}</h3>
                                <br />
                                <span>{parseToBrl(item.price)}</span>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                type="button"
                              />
                            </S.CartItem>
                          ))}
                        </ul>
                        <S.Value>
                          <p>Valor total</p>
                          <p>{parseToBrl(getTotalPrice())}</p>
                        </S.Value>
                        <Button
                          onClick={() => setMode(ChangeContent.DELIVERY)}
                          title="Clique aqui para ir a entrega"
                          type="button"
                        >
                          Continuar com a entrega
                        </Button>
                      </>
                    ) : (
                      <p className="empty-text">
                        O carrinho está vazio, adicione um produto para
                        continuar a compra.
                      </p>
                    )}
                  </>
                )
              } else if (mode === ChangeContent.DELIVERY) {
                return (
                  <>
                    <S.SidebarTitle>Entrega</S.SidebarTitle>
                    <S.InputGroup>
                      <label htmlFor="receiver">Quem irá receber </label>
                      <input
                        id="receiver"
                        type="text"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('receiver') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="adress">Endereço</label>
                      <input
                        id="adress"
                        type="text"
                        name="adress"
                        value={form.values.adress}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('adress') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="city">Cidade </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          id="cep"
                          type="text"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                          mask="99999-999"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="adressNumber">Número</label>
                        <input
                          id="adressNumber"
                          type="text"
                          name="adressNumber"
                          value={form.values.adressNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('adressNumber') ? 'error' : ''
                          }
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.InputGroup className="margin-bottom">
                      <label htmlFor="addressComplement">
                        Complemento (opcional)
                      </label>
                      <input
                        id="addressComplement"
                        type="text"
                        name="adressComplement"
                        value={form.values.adressComplement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </S.InputGroup>
                    <Button
                      onClick={() => setMode(ChangeContent.PAYMENT)}
                      title="clique aqui para ir ao pagamento"
                      type="button"
                    >
                      Continuar com o pagamento
                    </Button>
                    <Button
                      onClick={() => setMode(ChangeContent.CART)}
                      title="clique aqui para voltar ao carrinho"
                      type="button"
                    >
                      Volte para o carrinho
                    </Button>
                  </>
                )
              } else if (mode === ChangeContent.PAYMENT) {
                return (
                  <>
                    <S.SidebarTitle>
                      Pagamento - Valor a pagar{' '}
                      <span>{parseToBrl(getTotalPrice())}</span>
                    </S.SidebarTitle>
                    <S.InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão </label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('cardDisplayName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          id="cardNumber"
                          type="text"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={`width ${
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }`}
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          id="cardCode"
                          type="text"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <InputMask
                          id="expiresMonth"
                          type="text"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup className="margin-bottom">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <InputMask
                          id="expiresYear"
                          type="text"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <Button
                      title="clique aqui para finalizar o pagamento"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
                    </Button>
                    <Button
                      onClick={() => setMode(ChangeContent.DELIVERY)}
                      title="Clique aqui para ir a entrega"
                      type="button"
                    >
                      Voltar para a edição de endereço
                    </Button>
                  </>
                )
              }
            })()}
          </form>
        )}
      </S.Sidebar>
    </S.Container>
  )
}
export default Cart