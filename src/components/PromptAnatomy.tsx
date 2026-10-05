import { useId, useState } from 'react';

const layers = [
  {
    label: 'Product',
    prompt: 'Use the supplied pool-table photograph as the product reference. Preserve the table’s proportions, finish, cloth color, pockets and leg design.',
    adds: 'Start with the product, before inventing its surroundings.',
    why: 'A reference gives the image something specific to stay faithful to. Review the result against it; a convincing room can still contain the wrong table.',
  },
  {
    label: 'Scene',
    prompt: 'Place it in a lived-in room with warm plaster walls, a large window and a few restrained furnishings. Leave clear space around the table so someone could play.',
    adds: 'Give the product a believable place to live.',
    why: '“A beautiful room” leaves most of the decisions open. Materials, furnishings and usable space turn a mood into a scene you can judge and refine.',
  },
  {
    label: 'Light',
    prompt: 'Let soft late-afternoon light enter from the window at frame left. Keep the wood grain and cloth visible, with gentle shadows and no blown-out highlights.',
    adds: 'Choose where the light comes from and what it reveals.',
    why: 'Lighting direction does more than set a mood. It makes the finish readable, grounds the table in the room and gives you a clear starting point for the next revision.',
  },
  {
    label: 'Camera',
    prompt: 'Frame a three-quarter view from roughly waist height. Show the entire table and its legs, keep vertical lines straight and avoid a wide-angle stretch.',
    adds: 'Compose the image with the same care you would bring to a camera.',
    why: 'Viewpoint and framing decide what the audience understands about the product. Compare the generated image with the reference, then adjust one instruction at a time.',
  },
  {
    label: 'Motion',
    prompt: 'Use the approved still as the starting frame for a five-second shot. Move the camera slowly forward; keep the table, room and lighting consistent, with no objects appearing or changing shape.',
    adds: 'Turn an approved image into a shot with a purpose.',
    why: 'Approve the still before asking it to move. A specific camera move gives the film a clear rhythm; review every frame for changes before taking it into the edit.',
  },
];

export const PromptAnatomy = () => {
  const [selectedLayer, setSelectedLayer] = useState(0);
  const exampleId = useId();
  const activeLayer = layers[selectedLayer];

  return (
    <div className="prompting-anatomy">
      <p className="prompting-anatomy-intro">A prompt is a sequence of creative decisions. Build this example one layer at a time to see how a product reference becomes a scene, then a moving image.</p>
      <div className="prompting-anatomy-tabs" role="group" aria-label="Explore the layers of a product-scene prompt">
        {layers.map((layer, index) => (
          <button key={layer.label} type="button" aria-pressed={selectedLayer === index} aria-controls={exampleId} onClick={() => setSelectedLayer(index)}>{layer.label}</button>
        ))}
      </div>
      <div className="prompting-anatomy-example" id={exampleId} aria-live="polite" aria-atomic="true">
        <p className="lbl">Illustrative prompt / Product scene</p>
        <blockquote className="prompting-anatomy-quote">
          <p>{layers.slice(0, selectedLayer + 1).map((layer, index) => <span key={layer.label}>{index > 0 && ' '}{index === selectedLayer ? <mark>{layer.prompt}</mark> : layer.prompt}</span>)}</p>
        </blockquote>
        <div className="prompting-anatomy-note">
          <p><strong>{activeLayer.adds}</strong></p>
          <p>{activeLayer.why}</p>
        </div>
      </div>
      <p className="prompting-anatomy-disclaimer">The highlighted instruction adds the next layer of direction. Each result needs review, revision and an edit.</p>
    </div>
  );
};
