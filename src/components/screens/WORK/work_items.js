import artour from '../../../assets/work/artourgif.gif';
import caci from '../../../assets/work/caci.jpeg';
import mirelee from '../../../assets/work/mirelee.gif';
import pghwaterquality from '../../../assets/work/pghwaterquality.jpg';
import polkadotpoisonfrog from '../../../assets/work/polkadotpoisonfrog.gif';
import typography from '../../../assets/work/typography.jpg';

const WorkItems = [
  {
    name: 'Mire Lee Exhibit',
    tags: ['Exhibit'],
    description: 'Introducing artist Mire Lee and her work through an interactive and immersive exhibit to the CMU audience',
    image: mirelee,
    path: 'mirelee',
  },
  {
    name: 'CMU AR Tour',
    tags: ['AR'],
    description: 'An AR experience about “A Day In The Life” tour of a current CMU student for visitors on campus',
    image: artour,
    path: 'artour',
  },
  {
    name: 'PGH Water Quality',
    tags: ['Systems Mapping'],
    description: 'Illustrating the “wicked problem” of Pittsburgh’s water quality, using research of causes, stakeholders, interventions, and feedback loops',
    image: pghwaterquality,
    path: 'pghwaterquality',
  },

  {
    name: 'CACI International',
    tags: ['Logo', 'Graphics'],
    description: 'Collection of graphic design work done during my time an an intern at CACI International',
    image: caci,
    path: 'caci',
  },

  {
    name: 'Typography Studies',
    tags: ['Graphics', 'Motion'],
    description: 'Graphic studies studying typography and hierarchy (poster, magazine spread, animation)',
    image: typography,
    path: 'typography',
  },
  {
    name: 'Polkadot Poison Frog',
    tags: ['Illustration', 'Motion'],
    description: '3-part project understanding form and using storytelling for the endangered Polkadot Poison Frog',
    image: polkadotpoisonfrog,
    path: 'polkadotpoisonfrogs',
  },
];

export default WorkItems;
