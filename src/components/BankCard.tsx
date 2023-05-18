import { Button } from "@mui/material";

function BankCard(props: { name: string; img: string; price: number; description: string; }) {
    const {name, img, price, description} = props;
    
    return (
        <div className='bankcard'>
            <h2> {name} </h2>
            <img src={`${process.env.PUBLIC_URL}/${img}`} alt={`carte ${name}`} />
            <h4> {price} € <small>/ mois</small> </h4>
            <Button className='button' variant="contained" size="large">
                Register
            </Button>
            <br style={{color: 'red', width: '30px', position: 'relative', display: 'inline-block'}}/>
            <p> {description} </p>
        </div>
    );
}

export default BankCard