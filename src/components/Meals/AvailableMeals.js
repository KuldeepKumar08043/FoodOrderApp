import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Kuldeep',
        description: 'Finest and fish',
        price: 22.99
    },
    {
        id: 'm2',
        name: 'Kuldeep2',
        description: 'Finest and fish2',
        price: 21.99
    },
    {
        id: 'm3',
        name: 'Kuldeep3',
        description: 'Finest and fish3',
        price: 20.99
    }
]

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

    return <section className={classes.meals}>
        <ul>
            { mealsList }
        </ul>
    </section>
}

export default AvailableMeals;