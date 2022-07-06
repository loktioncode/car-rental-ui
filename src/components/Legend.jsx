import { updateResponseKeyString, formartDate } from "../helpers/utils";
import legendStyle from "../styles/legend.module.css";
import textStyle from "../styles/textstyle.module.css";

const Legend = (props) => {
  return (
  
      <div className={legendStyle.timesContainer }>
        <legend>

      
      <div className={legendStyle.contentHolder  }>
        <div >


          {
            updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name
              === updateResponseKeyString(props.pickUpTimeData.ReturnLocation).Name ? (
              <div className={legendStyle.pad5}>
          
               <p className={textStyle.subtitleS}>PickUp / Return Location :</p>
              
                <span className={textStyle.subtitleM}>{updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name}</span>
              </div>)

              : (
               
                  <div className={legendStyle.pad5}>
                    <p className={textStyle.subtitleS}>PickUp Location:</p>
                    <span className={textStyle.subtitleM}>{updateResponseKeyString(props.pickUpTimeData.PickUpLocation).Name}</span>
                
                    <p className={textStyle.subtitleS}>Return Location:</p>
                    <span className={textStyle.subtitleM}>{updateResponseKeyString(props.pickUpTimeData.ReturnLocation).Name}</span>
                  </div>
             

              )
          }

        </div>
        <div className={legendStyle.pad5}>

  

            <p className={textStyle.subtitleS}>PickUp Time :</p>
            <span className={textStyle.subtitleM}>{formartDate(props.pickUpTimeData.PickUpDateTime)}</span>




        </div>
        <div className={legendStyle.pad5}>

            <p className={textStyle.subtitleS}>Return Time :</p>
            <span className={textStyle.subtitleM}>{formartDate(props.pickUpTimeData.ReturnDateTime)}</span>
 


        </div>
      </div>
      </legend>
      </div>
      


  );
};

export default Legend;
