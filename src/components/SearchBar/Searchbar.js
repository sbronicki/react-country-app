import classes from './Searchbar.module.css'

const Searchbar = (props) => (
        <div className={classes.Searchbar}>
            <input 
                onChange={props.onInputChanged} 
                type="text" 
                placeholder="Search for a country..." />
        </div>
    )

export default Searchbar