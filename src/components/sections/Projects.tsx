import { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import project1 from '@/assets/projects/project-1.jpg';
import project2 from '@/assets/projects/project-2.jpg';
import project3 from '@/assets/projects/project-3.jpg';
import project4 from '@/assets/projects/project-4.jpg';
import project5 from '@/assets/projects/project-5.jpg';
import project6 from '@/assets/projects/project-6.jpg';
import project7 from '@/assets/projects/project-7.jpg';
import project8 from '@/assets/projects/project-8.jpg';
import ksb1 from '@/assets/projects/KSB1.jpeg';
import ksb2 from '@/assets/projects/KSB2.jpeg';
import ksb3 from '@/assets/projects/KSB3.jpeg';
import ksb4 from '@/assets/projects/KSB4.jpeg';
import ksb5 from '@/assets/projects/KSB5.jpeg';
import ksb6 from '@/assets/projects/KSB6.jpeg';
import ksb7 from '@/assets/projects/KSB7.jpeg';
import ksb8 from '@/assets/projects/KSB8.jpeg';
import ksb9 from '@/assets/projects/KSB9.jpeg';
import ksb10 from '@/assets/projects/KSB10.jpeg';
import ksb11 from '@/assets/projects/KSB11.jpeg';


type ProjectCategory = 'all' | 'residential' | 'commercial' | 'architectural' | 'custom';

interface Project {
  id: string;
  image: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  description: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    image: project1,
    title: 'Ambient Living Space',
    category: 'residential',
    categoryLabel: 'Residential Lighting',
    location: 'Modern Residence, Surat',
    description: 'A carefully curated lighting design that transforms the living space into a warm, inviting environment. The combination of ambient and accent lighting creates depth and visual interest throughout the space.',
    gallery: [project1, ksb1, ksb2, ksb3, ksb4, ksb5, ksb6, ksb7, ksb8, ksb9, ksb10, ksb11],
  },
  {
    id: 'project-2',
    image: project2,
    title: 'Contemporary Lounge',
    category: 'commercial',
    categoryLabel: 'Commercial Lighting',
    location: 'Private Villa',
    description: 'Sophisticated commercial lighting design featuring layered illumination that enhances the architectural features while maintaining optimal functionality for hospitality environments.',
    gallery: [project2, project1, project4],
  },
  {
    id: 'project-3',
    image: project3,
    title: 'Living Room Ambience',
    category: 'residential',
    categoryLabel: 'Residential Lighting',
    location: 'Luxury Apartment',
    description: 'Premium residential lighting solution that balances functional illumination with atmospheric design, creating a space that adapts to different moods and occasions.',
    gallery: [project3, project5, project6],
  },
  {
    id: 'project-4',
    image: project4,
    title: 'Modern Interior',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    location: 'Designer Home',
    description: 'An architectural lighting masterpiece that emphasizes clean lines and spatial definition. Each fixture is positioned to highlight the building\'s unique structural elements.',
    gallery: [project4, project7, project8],
  },
  {
    id: 'project-5',
    image: project5,
    title: 'Elegant Space',
    category: 'custom',
    categoryLabel: 'Custom Installation',
    location: 'Premium Residence',
    description: 'A bespoke lighting installation featuring custom-designed fixtures that complement the interior\'s unique character. Every element crafted to precise specifications.',
    gallery: [project5, project1, project3],
  },
  {
    id: 'project-6',
    image: project6,
    title: 'Artistic Wall Feature',
    category: 'custom',
    categoryLabel: 'Custom Installation',
    location: 'Showroom',
    description: 'Statement lighting that doubles as art. This custom installation creates a focal point that transforms the entire spatial experience.',
    gallery: [project6, project2, project4],
  },
  {
    id: 'project-7',
    image: project7,
    title: 'Reading Corner',
    category: 'residential',
    categoryLabel: 'Residential Lighting',
    location: 'Contemporary Home',
    description: 'Thoughtfully designed accent lighting that creates an intimate reading nook. The layered approach ensures both task lighting and ambient illumination.',
    gallery: [project7, project5, project1],
  },
  {
    id: 'project-8',
    image: project8,
    title: 'Cozy Ambience',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    location: 'Luxury Interior',
    description: 'Architectural lighting that seamlessly integrates with the building\'s design language, enhancing spatial perception while maintaining warmth and comfort.',
    gallery: [project8, project6, project2],
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'architectural', label: 'Architectural' },
  { id: 'custom', label: 'Custom' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="label-uppercase text-primary mb-4 block">Our Work</span>
          <h2 className="heading-section text-foreground mb-6">
            Selected
            <br />
            <span className="italic">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A curated portfolio of our distinguished lighting installations, 
            showcasing design excellence across residential, commercial, and architectural spaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
              className={`px-5 py-2.5 text-sm tracking-wide transition-all duration-300 rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-foreground text-background'
                  : 'border border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              {/* Card Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Single Overlay - Clean transition */}
              <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/80 transition-colors duration-500" />
              
              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Category Label - Always visible */}
                <span className="label-uppercase text-champagne mb-2 block text-xs">
                  {project.categoryLabel}
                </span>
                
                {/* Title - Always visible */}
                <h3 className="font-serif text-xl lg:text-2xl font-light text-ivory mb-4">
                  {project.title}
                </h3>
                
                {/* View Project Button - Appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="inline-block px-6 py-2.5 bg-champagne text-foreground text-sm tracking-wider font-medium">
                    View Project
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-background overflow-y-auto"
          onClick={closeProject}
        >
          <div className="min-h-screen" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-foreground transition-colors bg-background/80 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
              {/* Gallery */}
              <div className="relative mb-12 lg:mb-16">
                <div className="aspect-[16/10] lg:aspect-[21/9] overflow-hidden rounded-sm">
                  <img
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gallery Navigation */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-foreground transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center hover:border-foreground transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.gallery.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex ? 'bg-champagne' : 'bg-ivory/40'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Project Info (improved readability) */}
              <div className="max-w-3xl">
                <div className="bg-background/95 backdrop-blur-sm border border-border rounded-sm p-8 lg:p-10">
                  <span className="label-uppercase text-primary mb-4 block">
                    {selectedProject.categoryLabel}
                  </span>
                  <h2 className="heading-section text-foreground mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-8">
                    {selectedProject.location}
                  </p>
                  <div className="line-separator mb-8" />
                  <p className="body-large text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {selectedProject.gallery.length > 1 && (
                <div className="mt-12 pt-12 border-t border-border">
                  <div className="flex gap-4 overflow-x-auto pb-4">
                    {selectedProject.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-32 h-24 rounded-sm overflow-hidden border-2 transition-colors ${
                          idx === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-border'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
