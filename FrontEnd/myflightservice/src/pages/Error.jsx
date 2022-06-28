import missingflight from '../missingflight.jpg';

export const Error = () => {
    return (
        <>
            <h1> Sorry there are no flights located here</h1>
            <div><img src={missingflight} alt="Guy missing flight" height={200}/></div>
            </>
    );
}
