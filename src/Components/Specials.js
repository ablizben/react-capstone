import SpecialsCard from './SpecialsCard'

function Specials() {
    return (
     <>
      <div className="specials-section-container">
        <div className="specials-section-title">
              <h1>This Week's Specials</h1>
        </div>
        <SpecialsCard />
      </div>
     </>
    );
  }
  
  export default Specials;