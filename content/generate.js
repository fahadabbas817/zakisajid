const fs = require('fs');
const path = require('path');

const projects = [
  { dir: 'RatchetClamp', title: 'Ratchet with adjustable C-Clamp Assembly', tech: '["SolidWorks", "CAD"]', desc: 'Designed an adjustable C-clamp used for securing workpieces during machining and fabrication operations. The model incorporates ergonomic and functional features while demonstrating complex part modeling and pattern operations.' },
  { dir: 'CircularSteering', title: 'Circular Steering Wheel', tech: '["SolidWorks"]', desc: 'Created a Circular Steering Wheel featuring bolt holes and fastening provisions for fluid transfer systems.' },
  { dir: 'PipeElbow', title: 'Industrial Pipe Elbow', tech: '["SolidWorks", "Piping"]', desc: 'Modelled a pipe elbow assembly with flanged ends for directional flow control in piping networks.' },
  { dir: 'ErgonomicBottle', title: 'Ergonomic Consumer Bottle', tech: '["SolidWorks", "Surface Modeling"]', desc: 'Multi-surface organic form with integrated grip channel, threaded neck, and dual-tone shell.' },
  { dir: 'TransmissionTower', title: 'High-Voltage Transmission Tower', tech: '["SolidWorks", "Parametric Design"]', desc: 'Fully dimensioned lattice tower with symmetric cross-arm geometry.' },
  { dir: 'HeatExchanger', title: 'Compact Heat Exchanger Assembly', tech: '["SolidWorks"]', desc: 'Serpentine tube-and-shell heat exchanger with transparent housing.' },
  { dir: 'RotarySieving', title: 'Rotary Sieving Machine', tech: '["SolidWorks", "Assembly"]', desc: 'Full Assembly Model of a Rotary Sieving Machine.' },
  { dir: 'ChimneyEmission', title: 'Industrial Chimney Emission Dispersion', tech: '["ANSYS CFX", "CFD"]', desc: 'Conducted steady-state and transient CFD simulations to analyse smoke dispersion from an industrial chimney under crosswind conditions.' },
  { dir: 'PipeFlow', title: 'CFD Analysis of Laminar and Turbulent Flow', tech: '["ANSYS", "CFD"]', desc: 'Simulated airflow behaviour to study velocity and pressure variations within a pipe system.' },
  { dir: 'BatteryPack', title: 'Thermal Management of EV Battery Pack', tech: '["ANSYS", "Thermal"]', desc: 'Conducted thermal analysis to evaluate temperature distribution and identify overheating regions.' },
  { dir: 'FractureMechanics', title: 'Fracture Mechanics of Perforated Plate', tech: '["ANSYS APDL", "FEA"]', desc: 'Conducted fracture mechanics analysis of a perforated plate to investigate stress concentration and crack initiation behaviour.' },
  { dir: 'OfficeVentilation', title: 'CFD Analysis of Office Ventilation', tech: '["ANSYS", "CFD", "HVAC"]', desc: 'Performed CFD simulation to analyse airflow distribution and ventilation effectiveness within an office environment.' },
  { dir: 'FlexuralAnalysis', title: 'Parametric Flexural Analysis of CFRP', tech: '["ANSYS ACP", "Composites"]', desc: 'Conducted a parametric study to investigate the flexural behaviour of CFRP composite beams.' },
  { dir: 'ToothModel', title: 'Biomechanical Assessment of 3D Printed Tooth', tech: '["ANSYS", "Biomechanics"]', desc: 'Analysed the mechanical behaviour of PLA-HA composite tooth models to replicate the structural response of natural teeth.' },
];

projects.forEach(p => {
  const dirPath = path.join(__dirname, 'projects', p.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  const content = `---
date: '2023-01-01'
title: '${p.title}'
github: ''
external: ''
tech:
${JSON.parse(p.tech).map(t => '  - ' + t).join('\n')}
showInProjects: true
---

${p.desc}
`;
  fs.writeFileSync(path.join(dirPath, 'index.md'), content);
});

const jobs = [
  { dir: 'MechanicalIntern', title: 'Mechanical Engineering Intern', company: 'ABC Manufacturing', location: 'Industrial City', range: 'May 2022 - August 2022', desc: 'Assisted in the CAD modeling of rotational components and heat exchangers. Supported finite element analysis to ensure structural integrity of mechanical designs.' },
  { dir: 'SimulationIntern', title: 'Simulation Engineer Intern', company: 'XYZ Aerodynamics', location: 'Tech Park', range: 'January 2023 - April 2023', desc: 'Performed CFD simulations for indoor airflow distribution and evaluated thermal management systems for electronic assemblies.' },
];

jobs.forEach(j => {
  const dirPath = path.join(__dirname, 'jobs', j.dir);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  const content = `---
date: '2023-01-01'
title: '${j.title}'
company: '${j.company}'
location: '${j.location}'
range: '${j.range}'
url: ''
---

- ${j.desc}
- Collaborated with senior engineers to optimize product designs for manufacturing.
- Documented simulation results and presented findings to the engineering team.
`;
  fs.writeFileSync(path.join(dirPath, 'index.md'), content);
});

console.log("Projects and jobs generated.");
