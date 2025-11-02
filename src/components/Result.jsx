import React from 'react'

export default function Result(props) {
    const boxes = props.movies.map((movie) => (
        <Box key={movie.id} title={movie.title} vote={movie.vote_average} image={movie.poster_path ? movie.poster_path : movie.backdrop_path? movie.backdrop_path:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCBHgbS23kyBw2r8Pquu19UtKZnrZmFUx1g&s")} />
    ))
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
            {boxes}
        </div>
    )
}
const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    return (
        <div className='shadow min-h-[200px] mt-3 pb-3 bg-white rounded font-bold'>
            <img src={IMGPATH + props.image} alt="NOT FOUND" className='w-full' />
            <div className='w-full flex justify-between p-2'>
                <span>{props.title}</span><span>{(props.vote).toFixed(1)}</span>
            </div>
        </div>
    )
}

