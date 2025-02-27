import { BUTTON_KICK } from '../../constants';
import { connectToWebSocket } from '../WebSocket/WebSocket';
import classes from './KickButton.module.css';

interface Props {
  user: string;
}

export const KickButton = connectToWebSocket<Props>(
  ({ socket: { connected, removeUser }, user }) => (
    <button
      class={classes.root}
      title={BUTTON_KICK(user)}
      disabled={!connected}
      onClick={() => removeUser(user)}
    >
      {/* icon taken from material icons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="16px"
        viewBox="0 0 24 24"
        width="16px"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M20,17.17l-3.37-3.38c0.64,0.22,1.23,0.48,1.77,0.76C19.37,15.06,19.98,16.07,20,17.17z M21.19,21.19l-1.41,1.41L17.17,20H4 v-2.78c0-1.12,0.61-2.15,1.61-2.66c1.29-0.66,2.87-1.22,4.67-1.45L1.39,4.22l1.41-1.41L21.19,21.19z M15.17,18l-3-3 c-0.06,0-0.11,0-0.17,0c-2.37,0-4.29,0.73-5.48,1.34C6.2,16.5,6,16.84,6,17.22V18H15.17z M12,6c1.1,0,2,0.9,2,2 c0,0.86-0.54,1.59-1.3,1.87l1.48,1.48C15.28,10.64,16,9.4,16,8c0-2.21-1.79-4-4-4c-1.4,0-2.64,0.72-3.35,1.82l1.48,1.48 C10.41,6.54,11.14,6,12,6z" />
      </svg>
    </button>
  )
);
