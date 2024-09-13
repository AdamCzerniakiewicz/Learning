import React from 'react';
import Article from "../components/Article"

const articles = [
    {
        id: 1,
        title: "Czym jest lorem?",
        author:"Lorem Ipsum",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nulla deleniti veniam doloribus fugit quasi. Cupiditate, sed iusto. Est praesentium iusto vel voluptas cumque placeat ipsam, repellat recusandae facere minima!"

    },
    {
        id: 2,
        title: "Dlaczego lorem?",
        author:"Lorem Ipsum",
        text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cum soluta iste at reprehenderit iusto possimus non repudiandae tempore adipisci incidunt magnam earum, nostrum quidem aliquam eius sint asperiores animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo delectus excepturi unde. Ad dicta, recusandae cum, natus corrupti tempora enim nisi fugiat voluptatum rerum hic possimus fuga mollitia iste blanditiis!"

    },
    {
        id: 3,
        title: "Czy warto w lorem?",
        author:"Lorem Ipsum",
        text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nulla deleniti veniam doloribus fugit quasi. Cupiditate, sed iusto. Est praesentium iusto vel voluptas cumque placeat ipsam, repellat recusandae facere minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo libero facilis eum nulla ducimus repellendus itaque saepe corrupti sunt nesciunt consequatur eius reprehenderit placeat, voluptate ratione quas nisi quo veniam."

    },

]
const HomePage = () => {
    const artList = articles.map(article=> (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className='home'>{artList}</div>
    );
}
 
export default HomePage;