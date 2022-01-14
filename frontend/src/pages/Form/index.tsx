import Footer from 'components/footer';
import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    return (
        <>
            <FormCard movieId={`${params.movieId}`} />
            <Footer />
        </>
    );

}

export default Form;