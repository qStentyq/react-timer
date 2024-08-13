import { IconButton } from "@mui/material";
import { snap } from "../../interfaces/SnapInterface";
import DeleteIcon from "@mui/icons-material/Delete";
type TimerSnapProps = snap & {
    setSnapshot: React.Dispatch<React.SetStateAction<snap[]>>;
    snapshots: snap[];
};
const TimerSnap: React.FC<TimerSnapProps> = ({ hours, minutes, seconds, milisecs, num, setSnapshot, snapshots }) => {
    return (
        <div className='snapshots'>
            <div className='text attempt'>{num !== undefined ? `#${num + 1}` : 0}</div>
            <div className='timer timer__attempt' role='timer'>
                <div className='col-4'>
                    <div className='box'>
                        <p id='day'>{hours < 10 ? "0" + hours : hours}</p>
                        <span className='text'>Hours</span>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='box'>
                        <p id='hour'>{minutes < 10 ? "0" + minutes : minutes}</p>
                        <span className='text'>Minutes</span>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='box'>
                        <p id='minute'>{seconds < 10 ? "0" + seconds : seconds}</p>
                        <span className='text'>Secs</span>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='box'>
                        <p id='second'>{milisecs < 10 ? "0" + milisecs : milisecs}</p>
                        <span className='text'>Milisecs</span>
                    </div>
                </div>
            </div>
            <IconButton
                color='primary'
                aria-label='delete'
                onClick={() => setSnapshot(snapshots.filter((_, i) => i !== num))}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default TimerSnap;
