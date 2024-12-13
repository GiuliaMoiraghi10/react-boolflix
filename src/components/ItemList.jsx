import Card from './card'

// Riceve un array di elementi che trasforma in lista da mostrare sottoforma di card per ogni elemento
// Passo anche il title come props per dividere i film dalle serie
export default function itemList({ items = [], title }) {

    // ritorna una card per ogni list item mappato (crea nuovi array per ogni elemento)
    // alla card devono tornare gli items singoli
    return (
        <section>
            <div className='container'>
                <h2>{title}</h2>
            </div>
            <div className='container'>
                <ul className='row'>
                    {items.map((item) =>
                        <li key={item.id}>
                            <Card item={item} />
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}


