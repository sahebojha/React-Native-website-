import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Dualinfoblock({heading}) {
    return (
        <section className ="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                <div className="col-8 mx-auto">
                <p className="lead text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis, sequi numquam deleniti, at necessitatibus quod similique asperiores dolorem quas error maiores aut esse labore voluptatibus inventore officiis! Dolores iusto ipsum, a laudantium eius iure molestiae ipsa velit similique, ducimus soluta totam aliquid laboriosam nesciunt provident ab sunt nobis perspiciatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis, sequi numquam deleniti, at necessitatibus quod similique asperiores dolorem quas error maiores aut esse labore voluptatibus inventore officiis! Dolores iusto ipsum, a laudantium eius iure molestiae ipsa velit similique, ducimus soluta totam aliquid laboriosam nesciunt provident ab sunt nobis perspiciatis</p>
                </div>
                <div className ="col-4">
                    <div class="card bg-dark">
                        <img src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?cs=srgb&dl=code-machine-learning-programmer-1092424.jpg&fm=jpg" class="card-img-top" alt="Image goes here"/>
                        <div class="card-body">
                            <h5 class="card-title text-success">Click photos</h5>
                            <p class="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis, sequi numquam deleniti, at necessitatibus quod similique asperiores dolorem quas error maiores aut esse labore voluptam.</p>
                            <a href="#" class="btn btn-warning btn-block">Go somewhere</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
