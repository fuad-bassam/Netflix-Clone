
import Movie from '../Movie/Movie'


export default function MovieList({ data }) {
    console.log(data);

    return (

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: '12px' }}>
            {
                data.map(movie => {

                    return (

                        <Movie key={movie.id} movie={movie} />

                    )

                })


            }
        </div>

    )


};
