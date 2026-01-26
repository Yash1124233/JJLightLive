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
import hech1 from '@/assets/projects/HECH1.jpeg';
import hech2 from '@/assets/projects/HECH2.jpeg';
import hech3 from '@/assets/projects/HECH3.jpeg';
import hech4 from '@/assets/projects/HECH4.jpeg';
import hech5 from '@/assets/projects/HECH5.jpeg';
import hech6 from '@/assets/projects/HECH6.jpeg';
import hech7 from '@/assets/projects/HECH7.jpeg';
import l1 from '@/assets/projects/L1.jpeg';
import l2 from '@/assets/projects/L2.jpeg';
import l3 from '@/assets/projects/L3.jpeg';
import l4 from '@/assets/projects/L4.jpeg';
import l5 from '@/assets/projects/L5.jpeg';
import l6 from '@/assets/projects/L6.jpeg';
import l7 from '@/assets/projects/L7.jpeg';
import l8 from '@/assets/projects/L8.jpeg';
import l9 from '@/assets/projects/L9.jpeg';
import l10 from '@/assets/projects/L10.jpeg';
import l11 from '@/assets/projects/L11.jpeg';
import l12 from '@/assets/projects/L12.jpeg';
import g1 from '@/assets/projects/G1.jpeg';
import g2 from '@/assets/projects/G2.jpeg';
import g3 from '@/assets/projects/G3.jpeg';
import g4 from '@/assets/projects/G4.jpeg';
import g5 from '@/assets/projects/G5.jpeg';
import g6 from '@/assets/projects/G6.jpeg';
import g7 from '@/assets/projects/G7.jpeg';
import g8 from '@/assets/projects/G8.jpeg';
import g9 from '@/assets/projects/G9.jpeg';
import g10 from '@/assets/projects/G10.jpeg';
import g11 from '@/assets/projects/G11.jpeg';
import g12 from '@/assets/projects/G12.jpeg';
import g13 from '@/assets/projects/G13.jpeg';
import c1 from '@/assets/projects/C1.jpeg';
import c2 from '@/assets/projects/C2.jpeg';
import c3 from '@/assets/projects/C3.jpeg';
import c4 from '@/assets/projects/C4.jpeg';
import s1 from '@/assets/projects/S1.mp4';


type ProjectCategory = 'all' | 'residential' | 'commercial' | 'architectural' | 'custom';

interface GalleryMedia {
  src: string;
  type: 'image' | 'video';
}

interface Project {
  id: string;
  image: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  description: string;
  gallery: (string | GalleryMedia)[];
}

const projects: Project[] = [
  {
    id: 'project-1',
    image: ksb1,
    title: 'Ambient Living Space Of KSB Group',
    category: 'commercial',
    categoryLabel: 'Commercial Lighting',
    location: 'Surat',
    description: 'A carefully curated lighting design that transforms the living space into a warm, inviting environment. The combination of ambient and accent lighting creates depth and visual interest throughout the space.',
    gallery: [ksb1, ksb2, ksb3, ksb4, ksb5, ksb6, ksb7, ksb8, ksb9, ksb10, ksb11],
  },
  {
    id: 'project-2',
    image: hech1,
    title: 'Club-House Ambience Of Happy Excelencia',
    category: 'residential',
    categoryLabel: 'Residential Lighting',
    location: 'Surat',
    description: 'Sophisticated residential lighting design featuring layered illumination that enhances the architectural features while maintaining optimal functionality for hospitality environments.',
    gallery: [hech1, hech2, hech3, hech4, hech5, hech6, hech7],
  },
  {
    id: 'project-3',
    image: l5,
    title: 'The Library',
    category: 'custom',
    categoryLabel: 'Custom Installation',
    location: 'Surat',
    description: 'Premium Custom lighting solution that balances functional illumination with atmospheric design, creating a space that adapts to different moods and occasions.',
    gallery: [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12],
  },
  {
    id: 'project-4',
    image: g9,
    title: 'Modern Club-House Light Crafting',
    category: 'custom',
    categoryLabel: 'Custom Installation',
    location: 'Surat',
    description: 'An architectural lighting masterpiece that emphasizes clean lines and spatial definition. Each fixture is positioned to highlight the building\'s unique structural elements.',
    gallery: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13],
  },
  {
    id: 'project-5',
    image: c2,
    title: 'Conference Room',
    category: 'custom',
    categoryLabel: 'Custom Installation',
    location: 'Surat',
    description: 'A bespoke lighting installation featuring custom-designed fixtures that complement the interior\'s unique character. Every element crafted to precise specifications.',
    gallery: [c1, c2, c3, c4],
  },
  {
    id: 'project-6',
    image: project6,
    title: 'International Engineering Company',
    category: 'commercial',
    categoryLabel: 'Commercial Lighting',
    location: 'Navsari',
    description: 'Statement lighting that doubles as art. This custom installation creates a focal point that transforms the entire spatial experience.',
    gallery: [project6, { src: s1, type: 'video' }],
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
                <div className="aspect-[16/10] lg:aspect-[21/9] overflow-hidden rounded-sm bg-secondary/20 flex items-center justify-center">
                  {(() => {
                    const currentMedia = selectedProject.gallery[currentImageIndex];
                    const mediaData = typeof currentMedia === 'string' ? { src: currentMedia, type: 'image' } : currentMedia;
                    
                    if (mediaData.type === 'video') {
                      return (
                        <video
                          src={mediaData.src}
                          controls
                          className="w-full h-full object-contain"
                        />
                      );
                    }
                    
                    return (
                      <img
                        src={mediaData.src}
                        alt={`${selectedProject.title} - Item ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    );
                  })()}
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
                    {selectedProject.gallery.map((media, idx) => {
                      const mediaData = typeof media === 'string' ? { src: media, type: 'image' } : media;
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-32 h-24 rounded-sm overflow-hidden border-2 transition-colors bg-secondary/20 flex items-center justify-center relative ${
                            idx === currentImageIndex ? 'border-primary' : 'border-transparent hover:border-border'
                          }`}
                        >
                          {mediaData.type === 'video' ? (
                            <>
                              <video
                                src={mediaData.src}
                                className="w-full h-full object-contain"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                  <div className="w-0 h-0 border-l-5 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1" />
                                </div>
                              </div>
                            </>
                          ) : (
                            <img
                              src={mediaData.src}
                              alt={`Thumbnail ${idx + 1}`}
                              className="w-full h-full object-contain"
                            />
                          )}
                        </button>
                      );
                    })}
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
