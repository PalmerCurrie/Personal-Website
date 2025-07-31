import { useState } from 'react';
import './Experience.css';
import ExperienceCard from './ExperienceCard';

export default function ExperienceContainer() {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  const experiences = [
    {
      imageSrc: '/planview-logo.jpg',
      title: 'Junior Software Engineer',
      company: 'Planview (formerly Tasktop)',
      date: 'Jan 2025 - Sep 2025',
      details: [
        'Migrated legacy Angular components to React.',
        'Implemented unit and integration tests with Jest.',
        'Worked closely with the UI/UX team to improve usability.',
      ],
    },
    {
      imageSrc: '/city-of-vancouver-logo.jpg',
      title: 'Program Assistant 2',
      company: 'City of Vancouver',
      date: 'Apr 2024 - present',
      details: [
        'Assisted with community event planning.',
        'Managed scheduling and registrations.',
        'Handled communications with stakeholders.',
      ],
    },
    {
      imageSrc: '/WECCA-logo.jpg',
      title: 'Senior Summer Daycamp Leader',
      company: 'West End Community Centre Association',
      date: 'Mar 2022 - Aug 2024',
      details: ['Led summer camps, coordinated activities, and managed staff.'],
    },
    {
      imageSrc: '/cactus-club-logo.png',
      title: 'Prep/Line Cook',
      company: 'Cactus Club Cafe',
      date: 'Jan 2020 - June 2022',
      details: ['Prepared meals and maintained kitchen operations.'],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="experience-container">
      <div className="experience-description">
        <h2>Technical Experience </h2>
      </div>

      <div className="experience-card-container">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            index={index}
            imageSrc={exp.imageSrc}
            title={exp.title}
            company={exp.company}
            date={exp.date}
            details={exp.details}
            isOpen={openIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
