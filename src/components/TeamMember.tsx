
import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  position: string;
  skills: string[];
  certifications?: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ position, skills, certifications = [] }) => {
  // Get position initials for the avatar
  const getPositionInitials = (position: string) => {
    return position
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="bg-richblack-light rounded-lg overflow-hidden shadow-lg hover:shadow-gold/10 transition-shadow">
      <div className="flex justify-center pt-8 pb-4">
        <Avatar className="h-24 w-24 bg-gold/20">
          <AvatarFallback className="text-2xl font-bold text-gold">
            {getPositionInitials(position)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="p-6">
        <p className="text-gold mb-4 text-xl font-semibold">{position}</p>
        
        <div className="mb-4">
          <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="text-xs bg-richblack-dark text-gray-300 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {certifications.length > 0 && (
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Certificações</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
