const fs = require('fs');
const path = require('path');

const projects = [
  { dir: 'RibWheel', title: 'Rib-Reinforced Rotational Wheel', tech: '["SolidWorks", "CAD Design"]', desc: 'Developed a rotational component with integrated ribs to improve stiffness and load-carrying capability. This project showcases advanced revolve, rib, and circular pattern features for mechanical design applications.' },
  { dir: 'RatchetClamp', title: 'Ratchet with adjustable C-Clamp Assembly', tech: '["SolidWorks", "CAD Design"]', desc: 'Designed an adjustable C-clamp used for securing workpieces during machining and fabrication operations. The model incorporates ergonomic and functional features while demonstrating complex part modeling and pattern operations.' },
  { dir: 'CircularSteering', title: 'Circular Steering Wheel', tech: '["SolidWorks", "CAD Design"]', desc: 'Created a Circular Steering Wheel featuring bolt holes and fastening provisions for fluid transfer systems. The design utilizes revolve, sweep, and hole wizard tools commonly used in industrial piping applications.' },
  { dir: 'PipeElbow', title: 'Industrial Pipe Elbow with Flanged Connection', tech: '["SolidWorks", "Piping Design"]', desc: 'Modelled a pipe elbow assembly with flanged ends for directional flow control in piping networks. The project highlights the use of reference geometry, extrusions, and flange design techniques for industrial components.' },
  { dir: 'AeroBoat', title: 'Aerodynamic Lofted Boat', tech: '["SolidWorks", "Surface Lofting", "Aerodynamics"]', desc: 'Developed a smooth lofted component by connecting multiple cross-sections across different reference planes. This project demonstrates advanced surface transition and lofting techniques used in aerospace and product design.' },
  { dir: 'ErgonomicBottle', title: 'Ergonomic Consumer Bottle', tech: '["SolidWorks", "Surface Modeling"]', desc: 'Multi-surface organic form with integrated grip channel, threaded neck, and dual-tone shell. Demonstrates advanced loft, fillet, and shell operations.' },
  { dir: 'TransmissionTower', title: 'High-Voltage Transmission Tower', tech: '["SolidWorks", "Parametric Design"]', desc: 'Fully dimensioned lattice tower with symmetric cross-arm geometry. Parametric constraints enable rapid scaling for varied span requirements.' },
  { dir: 'HeatExchanger', title: 'Compact Heat Exchanger Assembly', tech: '["SolidWorks", "Assembly Design"]', desc: 'Serpentine tube-and-shell heat exchanger with transparent housing. Showcases assembly modelling, circular patterns, and section-view analysis.' },
  { dir: 'RotarySieving', title: 'Rotary Sieving Machine — Full Assembly Model', tech: '["SolidWorks", "Assembly Design"]', desc: 'Rotary Sieving Machine — Full Assembly Model' },
  { dir: 'HeatSink', title: 'Heat Sink PCB using Ansys Fluent', tech: '["ANSYS Fluent", "Thermal Analysis", "CFD"]', desc: 'Performed thermal analysis of a PCB heat sink to evaluate heat dissipation and temperature distribution. The study helped assess cooling performance and improve thermal management of electronic components.' },
  { dir: 'ChimneyEmission', title: 'Industrial Chimney Emission Dispersion Analysis Under Crosswind Conditions Using ANSYS CFX', tech: '["ANSYS CFX", "CFD", "Environmental"]', desc: 'Conducted steady-state and transient CFD simulations to analyse smoke dispersion from an industrial chimney under crosswind conditions. The study evaluated pollutant transport behaviour and environmental dispersion characteristics.' },
  { dir: 'PipeFlow', title: 'CFD Analysis of Laminar and Turbulent Flow in a Pipe', tech: '["ANSYS", "CFD"]', desc: 'Simulated airflow behaviour to study velocity and pressure variations within a pipe system. The analysis helped evaluate flow performance and losses.' },
  { dir: 'BatteryPack', title: 'Thermal Management of Electric Vehicle Battery Pack', tech: '["ANSYS", "Thermal Analysis", "EV Design"]', desc: 'Conducted thermal analysis to evaluate temperature distribution and identify overheating regions. The study supported improved battery cooling and thermal performance.' },
  { dir: 'FractureMechanics', title: 'Fracture Mechanics Assessment of a Perforated Plate Using ANSYS APDL', tech: '["ANSYS APDL", "FEA", "Fracture Mechanics"]', desc: 'Conducted fracture mechanics analysis of a perforated plate to investigate stress concentration and crack initiation behaviour. The study assessed structural integrity around the hole using finite element analysis.' },
  { dir: 'OfficeVentilation', title: 'CFD Analysis of Office Ventilation and Indoor Airflow Distribution', tech: '["ANSYS", "CFD", "HVAC"]', desc: 'Performed CFD simulation to analyse airflow distribution and ventilation effectiveness within an office environment containing desktop computers. The study evaluated air circulation patterns and thermal comfort to optimize indoor air quality.' },
  { dir: 'FlexuralAnalysis', title: 'Parametric Flexural Analysis of CFRP Composite Laminates & Three-Point Bending Test Using ANSYS ACP', tech: '["ANSYS ACP", "Composites", "FEA"]', desc: 'Conducted a parametric study to investigate the flexural behaviour of CFRP composite beams with different ply stacking sequences under three-point bending loading. The analysis evaluated stress distribution and deflection characteristics using numerical simulation techniques.' },
  { dir: 'ToothModel', title: 'Biomechanical Assessment of 3D Printed PLA–Hydroxyapatite Tooth Models', tech: '["ANSYS", "Biomechanics", "FEA"]', desc: 'Analysed the mechanical behaviour of PLA–HA composite tooth models to replicate the structural response of natural teeth. The simulation supported material selection and design optimization for dental 3D printing applications.' },
];

projects.forEach((p, i) => {
  const dirPath = path.join(__dirname, 'featured', p.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  // Subtracting i from current year ensures ascending/descending sorting in graphql gives exactly this order
  const year = (2030 - i).toString();
  const content = `---
date: '${year}-01-01'
title: '${p.title}'
cover: './cover.png'
cover2: './cover2.png'
github: ''
external: ''
tech:
${JSON.parse(p.tech).map(t => '  - ' + t).join('\n')}
---

${p.desc}
`;
  fs.writeFileSync(path.join(dirPath, 'index.md'), content);
  
  // Copy placeholder images if they don't exist
  const srcImage = path.join(__dirname, '..', 'src', 'images', 'logo.png');
  if (!fs.existsSync(path.join(dirPath, 'cover.png'))) {
    fs.copyFileSync(srcImage, path.join(dirPath, 'cover.png'));
  }
  if (!fs.existsSync(path.join(dirPath, 'cover2.png'))) {
    fs.copyFileSync(srcImage, path.join(dirPath, 'cover2.png'));
  }
});

console.log("All 17 accurate projects generated in content/featured.");
