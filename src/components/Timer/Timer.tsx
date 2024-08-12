import Button from "@mui/material/Button";
import PlayArrowOutlined from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlined from "@mui/icons-material/PauseOutlined";
import UpdateOutlined from "@mui/icons-material/UpdateOutlined";

// import "./Timer.css";
import { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Timer = () => {
    const [milisecs, setMilisecs] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(true);

    // const deadline = "September, 7, 2024";

    const getTime = (startTime = 0) => {
        if (!isPaused) {
            setTime((prevTime) => prevTime + (Date.now() - startTime));
        }

        // console.log(time);

        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
        setMilisecs(Math.floor(time / 10) % 100);
        console.log(milisecs, hours, minutes, seconds);
    };

    useEffect(() => {
        if (isPaused) {
            getTime();
        }
        if (!isPaused) {
            let startTime = Date.now();
            const interval = setInterval(() => {
                getTime(startTime);
                startTime = Date.now();
            }, 10);
            return () => clearInterval(interval);
        }
    }, [time, isPaused]);

    return (
        <>
            <div className='timer' role='timer'>
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
                        <span className='text'>Seconds</span>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='box'>
                        <p id='second'>{milisecs < 10 ? "0" + milisecs : milisecs}</p>
                        <span className='text'>Milisecs</span>
                    </div>
                </div>
            </div>
            <div className='buttons'>
                <Button
                    variant='contained'
                    startIcon={<PlayArrowOutlined />}
                    onClick={() => {
                        setIsPaused(false);
                        // setTime(time + 1);
                    }}
                >
                    Start
                </Button>
                <Button
                    variant='contained'
                    endIcon={<PauseOutlined />}
                    onClick={() => {
                        setIsPaused(true);
                        // setTime(time - 1);
                    }}
                >
                    Pause
                </Button>
                <Button
                    variant='contained'
                    endIcon={<UpdateOutlined />}
                    onClick={() => {
                        // setIsPaused(true);
                        setTime(0);
                    }}
                >
                    Reset
                </Button>
            </div>
        </>
    );
};

export default Timer;
