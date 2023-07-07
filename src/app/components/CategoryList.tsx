import CategoryCard from "./CategoryCard";

type EventCategoriesProps = {
    id: string;
    img: string;
    title: string;
  }[];
  
type CategoriesListProps = {
    categories: EventCategoriesProps;
}  

export default function CategoryList({categories,}: CategoriesListProps) {


  return (
    <div style={{
        display:'grid',
        gridAutoFlow:'column',
        gap:'.5rem',
        gridAutoColumns:'30%',
        overflowX: 'auto',
        scrollbarWidth: 'none'
    }}>
       {categories.map(cat => (
        <CategoryCard
            id={cat.id}
            img={cat.img}
            title={cat.title}
        />
       ))

       }

    </div>
  )
}

