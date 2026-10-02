import type { Visual as VisualData } from '../../data/categories';
import { EngineRoomDiagram } from './EngineRoomDiagram';
import { FlowVisual } from './FlowVisual';
import { Frame } from './Frame';
import { SkylineVisual } from './SkylineVisual';
import { TypeVisual } from './TypeVisual';
import { VinylVisual } from './VinylVisual';

type Props = { visual: VisualData; sizes: string; size?: 'home' | 'grid'; eager?: boolean };

export const Visual = ({ visual, sizes, size = 'grid', eager }: Props) => {
  switch (visual.type) {
    case 'image':
      return <Frame src={visual.src} alt={visual.alt} tag={visual.tag} fit={visual.fit} sizes={sizes} eager={eager} />;
    case 'type':
      return <TypeVisual big={visual.big} small={visual.small} tag={visual.tag} />;
    case 'flow':
      return <FlowVisual nodes={visual.nodes} tag={visual.tag} />;
    case 'engine-room-diagram':
      return <EngineRoomDiagram nodes={visual.nodes} tag={visual.tag} size={size} />;
    case 'skyline':
      return <SkylineVisual images={visual.images} tag={visual.tag} />;
    case 'vinyl':
      return <VinylVisual discs={visual.discs} tag={visual.tag} />;
  }
};
