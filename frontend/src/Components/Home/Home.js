import React from "react";
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle} from "reactstrap";
import { baseUrl } from "../../Shared/baseUrl";

// function RenderCard({item, errMess }) {
function RenderCard() {

    //  if ( errMess ) {
        
    //     return (
    //         <h4>{errMess}</h4>
    //     );
    // }
    // else{

        return(
                <Card>
                    {/* <CardImg width="100%" src={baseUrl + item?.image} alt={item.name} />                 */}
                    <CardImg width="100%" src='' alt="" />                
                    <CardBody>
                        {/* <CardTitle> {item.name} </CardTitle>
        
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
        
                        <CardText>{item.description}</CardText> */}
                    </CardBody>
        
                </Card>
        );

    }




function Home(props) {
    console.log(props, "props == ")
    return(
        <div className="container">
            <div className="row align-items-start">

                <div className="col-12 col-md m-1">
                    <RenderCard
                        item={props.beer}
                        isLoading={props.beersLoading}
                        errMess={props.beerErrMess}
                    />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard 
                        item={props.brewery} 
                        isLoading={props.breweryLoading}
                        errMess={props.breweryErrMess} 

                    />
                </div>

            </div>
        </div>
    );
}

export default Home;