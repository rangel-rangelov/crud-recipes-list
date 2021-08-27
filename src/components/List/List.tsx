import ListItem from 'components/ListItem';

const List = (): JSX.Element => (
  <>
    <ListItem id={0} title="Heading" description="Ingredient: ingredient" onDelete={(id) => console.log(id)} />
    <ListItem id={0} title="Heading" description="Ingredient: ingredient" onDelete={(id) => console.log(id)} />
    <ListItem id={0} title="Heading" description="Ingredient: ingredient" onDelete={(id) => console.log(id)} />
    <ListItem id={0} title="Heading" description="Ingredient: ingredient" onDelete={(id) => console.log(id)} />
    <ListItem id={0} title="Heading" description="Ingredient: ingredient" onDelete={(id) => console.log(id)} />
  </>
);

export default List;
