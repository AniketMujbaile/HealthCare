import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav className='bg-primary p-2 background'>
      <Container className='d-flex justify-content-between align-items-center'>
        <i class="fa-solid fa-stethoscope fa-beat-fade fa-2x"></i>
        <h3 className='fw-bold'>Live Healthier</h3>
        <span>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header
