import React from 'react';
import { StereoState } from '../../types';
import RoomScene from './RoomScene';
import StereoUnit from './StereoUnit';

interface StereoRoomProps {
  state: StereoState;
  embedUrl: string | null;
  onTogglePower: () => void;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onVolumeChange: (v: number) => void;
  onShuffle: () => void;
}

const StereoRoom: React.FC<StereoRoomProps> = (props) => {
  return (
    <RoomScene>
      <StereoUnit {...props} />
    </RoomScene>
  );
};

export default StereoRoom;
