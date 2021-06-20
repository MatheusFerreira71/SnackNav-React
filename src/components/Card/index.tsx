import './style.scss';
import { Button, IconButton, Snackbar } from '@material-ui/core';
import { SyntheticEvent, useState } from 'react';

function Card() {
    const [open, setOpen] = useState<boolean>(false);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event: SyntheticEvent | MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <main>
            <div className="card">
                <header className="card-header">
                    <h1>Exemplo de Snackbar</h1>
                </header>
                <div className="card-content">
                    <Button onClick={handleClick}>Open simple snackbar</Button>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Exemplo de Snackbar"
                        action={
                            <>
                                <Button color="secondary" size="small" onClick={handleClose}>
                                    Entendi
                                </Button>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                    X
                                </IconButton>
                            </>
                        }
                    />
                </div>
            </div>
        </main>
    );
}

export default Card;