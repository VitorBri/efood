import { BarLoader } from 'react-spinners'
import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <BarLoader color={colors.red} />
  </Container>
)

export default Loader
