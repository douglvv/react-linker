import React from "react";
import styles from './styles.module.css'
import { Row, Col } from "react-bootstrap";
import { SlOptions, SlShare } from 'react-icons/Sl'

const Profile = () => {
    return (
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
    );
};

export default Profile;