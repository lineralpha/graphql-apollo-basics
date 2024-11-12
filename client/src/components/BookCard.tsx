import { Book } from "@/__generated__/schema-types"
import { Card } from "react-bootstrap"

type BookCardProps = {
  book: Book
}

const BookCard = ({ book }: BookCardProps ) => {
  return (
    <Card>
      <Card.Title>{book.title}</Card.Title>
    </Card>
  )
}

export default BookCard
