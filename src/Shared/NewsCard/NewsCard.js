import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {

    const { author, image_url, title, total_view, _id, details } = news;
    return (
        <div className='mb-2'>
            <Card className="">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            style={{ height: '60px' }}
                            src={author?.img}
                        ></Image>
                        <div className='ms-3'>
                            <p>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ? <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More...</Link></> :
                                <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;