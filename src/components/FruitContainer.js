import { useState} from 'react';
import FruitFilter from './FruitFilter';
import FruitList from './FruitList';



function FruitContainer(props) {
   // initialize the fruit list to the full list passed in props 
  const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)

  // to update state, we will need a function that updates when
  // the filter value changes
  // this function will store the filter state, and filter
  // the list of fruits to display

  const handleFilterChange = (event) => {
    event.preventDefault();

    const filterValue = event.target.value;

    setFruitsToDisplay((_prevState) => {
      //remove the fruits that don't contain the filter value
      const filteredFruitList = props.fruits.filter((fruit) => {
        //include the values that match the user input(event.target.value)
        return fruit.toLowerCase().includes(filterValue.toLowerCase());
      })
      return filteredFruitList
    })
  }



   return (
     <div>
       <FruitFilter onChange={(e) => handleFilterChange(e)} />
       <FruitList fruits={fruitsToDisplay} />
    </div>
  )
 }

 export default FruitContainer