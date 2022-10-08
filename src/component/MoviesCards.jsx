import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MoviesCard({
    movie: { title, description, posterUrl,rate },
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"src={posterUrl}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description} 
        </Card.Text>
        <Button variant="primary">watch</Button>
      </Card.Body>
    </Card>
  );
}

