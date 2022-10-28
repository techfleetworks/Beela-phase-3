import { Spinner } from 'react-bootstrap';

const BeelaLoader = (props: any) => {
    return (
        <div style={{margin:'10px'}}>
            <Spinner animation="border" variant="dark" />
        </div>
    )
}


export default BeelaLoader;