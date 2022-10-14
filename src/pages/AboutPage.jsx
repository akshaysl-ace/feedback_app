import Card from "../components/shared/Card";
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React v18+ app component which can be reused in any mid-scale / large application for taking user feedbacks.</p>
                <p>App version: 1.0.0</p>
                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage;