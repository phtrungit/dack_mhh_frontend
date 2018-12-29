import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
    state = {
        open: true,
        vertical: 'top',
        horizontal: 'center',
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { vertical, horizontal, open } = this.state;
        return (
            <div>

                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={this.props.open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">I love snacks</span>}
                />
            </div>
        );
    }
}

export default PositionedSnackbar