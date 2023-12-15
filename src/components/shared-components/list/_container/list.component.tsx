import { ListContainer } from "./list.component.styles";
import ListItem from "../list-item/list-item.component";

const List: React.FC = () => {
  return (
    <ListContainer>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ListContainer>
  );
};

export default List;
