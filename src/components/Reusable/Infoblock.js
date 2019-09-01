import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title ={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus consequatur blanditiis cumque! Deserunt odit ut quidem voluptate rem aut fuga quis blanditiis corporis voluptatum vero hic cupiditate laborum possimus dolor molestias placeat saepe voluptas laudantium ipsum delectus, commodi nihil explicabo illo. Excepturi incidunt quia, molestias nam dolorem dolor eveniet officiis provident quo, sint nihil laborum natus ipsa fuga nostrum tempora.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
