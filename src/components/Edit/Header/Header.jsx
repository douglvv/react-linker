import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.module.css';

function Header() {
  return (
    <Container fluid="md" className='mb-3 d-flex justify-content-center align-items-center'>
      <Row as={'div'} className={`bg-primary text-light m-3 p-3 ${styles.wrapper}`}>
        <Col sm={12} as={'h3'}>Edit</Col>
      </Row>
    </Container>
  );
}

export default Header;