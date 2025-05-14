import { useMemo } from "react";
import {
  IoAirplaneOutline,
  IoBalloonOutline,
  IoBandageOutline,
  IoBarbellOutline,
  IoBicycleOutline,
  IoCogOutline,
  IoDiamondOutline,
  IoFlashOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoLeafOutline,
  IoPawOutline,
  IoPulseOutline,
  IoRocketOutline,
} from "react-icons/io5";
import shuffle from "../utils/shuffle";

const ICONS = [
  IoAirplaneOutline,
  IoBalloonOutline,
  IoBandageOutline,
  IoBarbellOutline,
  IoBicycleOutline,
  IoCogOutline,
  IoDiamondOutline,
  IoFlashOutline,
  IoHappyOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoLeafOutline,
  IoPawOutline,
  IoPulseOutline,
  IoRocketOutline,
];

function DoodleIcons({ iconCount = 80, minSize = 10, maxSize = 30 }) {
  // Calculate and organize all icon properties
  const iconConfigs = useMemo(() => {
    // Determine the grid size: make a square grid that fits all icons
    const gridSize = Math.ceil(Math.sqrt(iconCount));

    // Step 1: Build all possible grid positions
    let positions = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        positions.push({ row, col });
      }
    }

    // Step 2: Shuffle the grid positions randomly
    positions = shuffle(positions);

    // Step 3: Take only the number of positions we need
    const selectedPositions = positions.slice(0, iconCount);

    // Step 4: Assign each position a random icon
    return selectedPositions.map(({ row, col }, index) => {
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];

      // Calculate the center of the cell
      const cellTop = (row + 0.5) * (100 / gridSize);
      const cellLeft = (col + 0.5) * (100 / gridSize);

      const jitter = 5; // Maximum % offset from grid center

      // Add jitter for natural, hand-drawn randomness
      const top = cellTop + (Math.random() * jitter * 2 - jitter);
      const left = cellLeft + (Math.random() * jitter * 2 - jitter);

      // Add random rotation and size for artistic doodle effect
      const rotation = Math.random() * 360;
      const size = Math.floor(Math.random() * (maxSize - minSize) + minSize);

      return {
        Icon,
        id: `doodle-${index}-${row}-${col}`,
        style: {
          top: `${top}%`,
          left: `${left}%`,
          transform: `rotate(${rotation}deg)`,
          fontSize: `${size}px`,
        },
      };
    });
  }, [iconCount, minSize, maxSize]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {iconConfigs.map(({ Icon, id, style }) => (
        <Icon
          key={id}
          style={style}
          className="absolute text-white opacity-20"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default DoodleIcons;
