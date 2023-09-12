import React from 'react';
import './Blog.scss';
import blog from "../../Assets/Images/subscribe.png";
import author from "../../Assets/Images/author.png";
import trending from "../../Assets/Images/trending.png";

const Blog = () => {

    const blogposts = [
        {
            img: require("../../Assets/Images/blog1.png"),
            name: "Elini Style Files – A Day Out with Kubbra Sait",
            date: "August 30, 2023",
        },
        {
            img: require("../../Assets/Images/blog2.png"),
            name: "Tarun Tahiliani : Weaving Indian Couture on the Map",
            date: "August 30, 2023",
        },
        {
            img: require("../../Assets/Images/blog3.png"),
            name: "Fashionable Affairs: into the Style of Made in Heaven",
            date: "August 30, 2023",
        },
        {
            img: require("../../Assets/Images/blog6.png"),
            name: "9 Wardrobe Essentials for That Need To Be Yours!",
            date: "August 30, 2023",
        },
        {
            img: require("../../Assets/Images/blog4.png"),
            name: "From Emeralds to Polki - Season’s Hottest Jewellery Trends You Need to Try",
            date: "August 30, 2023",
        },
        {
            img: require("../../Assets/Images/blog5.png"),
            name: "Learn with Elini: Care For Your Kids Wear",
            date: "August 30, 2023",
        },
    ]
    return (
        <div className="contain blog-container contain-bg">
            <div className="left-section ">
                <h1 className="blog-title">Cocktail Glam: Check Out These Chic Skirt and Top Sets to Make a Statement</h1>
                <p className="blog-date">August 31, 2023</p>
                <br></br>
                <p className="sec-para"><span style={{ fontWeight: "bold" }}>Elini</span> is a luxury brand which was born in the India, a land symbolizing opulence and exceptional class.
                    We produce fashion items using original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental art and culture.
                    Elini introduces to the market an array of unique designs, for the elegant woman seeking the extraordinary!</p>
                <img src={blog} alt="Blog" className="blog-image" />
                <p className="sec-para">Luxury brand which was born in the India, a land symbolizing opulence and exceptional class.
                    We produce fashion items using original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental art and culture.
                    Elini introduces to the market an array of unique designs, for the elegant woman seeking the exts a luxury brand which was born in the India, a land symbolizing opulence and exceptional class.
                    We produce fashion items using original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental ais a luxury brand which was born in the India, a land symbolizing opulence and exceptional class.
                    We produce fashion items using original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental art and culture.
                    Elini intr! a luxury brand which was born in the India, a land symbole. Elini introduces to the market an array of unique designs, for the elegant woman seeking the extraordinaanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental art and culture.
                    Elini introduces to the market an array of unique designs, for the elegant woman seekining original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental art and culture.
                    Elini introduces to the market an array of unique designs, for the elegant woman seeking the ex which was born in the India, a land symbolizing opulence and exceptional class.
                    We produce fashion items using original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                    The label was founded by Lila Achimu and is driven by her love and passion for both Japanese and Oriental art and culture.
                </p>
                <hr className="divider" />
                <div className="author-info">
                    <img src={author} alt="Author" className="author-image" />
                    <div className="author-details">
                        <p className="author-name">Shradha Aneja (Author)</p>
                        <p className="sec-para">A luxury brand which was born in the India, a land symbolizing opulence and exceptional class.
                            We produce fashion items using original craftsmanship, vibrant prints, and out-of-the- ordinary meticulousness.
                            The label was founded by Lila Achimu.</p>
                    </div>
                </div>
            </div>
            <hr className="divider-main" />
            <div className="right-section">
                <h2 className="trending-heading">Trending This Week</h2>
                <img src={trending} alt="Trending" className="trending-image" />
                <h2 className="like-heading">You May Also Like</h2>
                {blogposts.map((blogposts, index) => (
                    <div className="like-item">
                        <img src={blogposts.img} alt="Like 1" className="like-image" />
                        <div className="like-details">
                            <p className="like-description">{blogposts.name}</p>
                            <p className="like-date">{blogposts.date}</p>
                        </div>
                    </div>
                ))}
                <h2 className="categories-heading">Categories</h2>
                <ul className="categories-list">
                    <li className="category-item">Category 1</li>
                    <li className="category-item">Category 2</li>
                    <li className="category-item">Category 3</li>
                    <li className="category-item">Category 4</li>
                    <li className="category-item">Category 5</li>
                    <li className="category-item">Category 6</li>
                    <li className="category-item">Category 7</li>
                    <li className="category-item">Category 8</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;
