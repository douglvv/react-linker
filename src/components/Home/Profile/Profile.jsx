import React from "react";
import styles from './styles.module.css'
import { Row, Col, Image, Badge } from "react-bootstrap";
import { SlOptions, SlShare } from 'react-icons'

const Profile = ({ profile }) => {
    return (
        <>
            <Row as={'div'} xs={2} className="justify-content-between">
                <Col as={'div'} sm={4} className="mt-3">
                    <a href="/edit" className={styles.iconButton}>
                        <SlOptions title="Edit profile" />
                    </a>
                </Col>
                <Col as={'div'} sm={4} className="mt-3 d-flex justify-content-end">
                    <button className={styles.iconButton}>
                        <SlShare title="Share" />
                    </button>
                </Col>
            </Row>

            <Row as={'div'} sm={1}>
                <Col sm={12} className="mb-3 d-flex justify-content-center align-items-center">
                    <Image className={styles.profileImg} src={profile.imgUrl} />
                </Col>
            </Row>

            <Row as={'div'} sm={1}>
                <Col sm={12} className="text-center">
                    <h4>
                        <Badge pill bg="primary">{profile.username}</Badge>
                    </h4>
                </Col>
            </Row>

            <Row as={'div'} sm={1} className="mb-3 d-flex align-items-center justify-content-center">
                <Col sm={8} className="text-center">
                    <p className="fs-6">{profile.bio}</p>
                </Col>
            </Row>
        </>

    );
};

export default Profile;
