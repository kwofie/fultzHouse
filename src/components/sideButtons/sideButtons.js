import './sideButtons.css'
import { Link } from "react-router-dom";

const SideButtons = function() {
    return (
        <div className="side-buttons">
                    <a href='/donations'  className='side-link-a'>
                        <div className='side-button'>
                                <p>Donate</p>
                        </div>
                    </a>
                    <a href='/volunteer' className='side-link-b'>
                        <div className='side-button'>
                                <p>Volunteer</p>
                        </div>
                    </a>
        </div>
    )
}

export default SideButtons