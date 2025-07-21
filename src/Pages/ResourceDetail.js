import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Share2, Calendar, Clock, User, FileText, Video, Calculator, BookOpen, BarChart } from 'lucide-react';
import Header from '../Components/Header';
import { featureResources } from '../assets/assets';

const ResourceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [resource, setResource] = useState(null);

    useEffect(() => {
        const foundResource = featureResources.find(r => r.id === parseInt(id));
        if (foundResource) {
            setResource(foundResource);
        } else {
            navigate('/404');
        }
    }, [id, navigate]);

    if (!resource) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const getIconForType = (type) => {
        const icons = {
            'Case Study': FileText,
            'Whitepaper': FileText,
            'E-book': BookOpen,
            'Webinar': Video,
            'Video Tutorial': Video,
            'ROI Calculator': Calculator,
            'Industry Report': BarChart,
            'Research Paper': FileText,
        };
        const Icon = icons[type] || FileText;
        return <Icon className="w-5 h-5" />;
    };

    const renderResourceContent = () => {
        switch (resource.type) {
            case 'Case Study':
                return <CaseStudyContent resource={resource} />;
            case 'Whitepaper':
                return <WhitepaperContent resource={resource} />;
            case 'E-book':
                return <EbookContent resource={resource} />;
            case 'Webinar':
                return <WebinarContent resource={resource} />;
            case 'Technical Guide':
                return <TechnicalGuideContent resource={resource} />;
            case 'Industry Report':
                return <IndustryReportContent resource={resource} />;
            case 'Checklist':
                return <ChecklistContent resource={resource} />;
            case 'Template':
                return <TemplateContent resource={resource} />;
            case 'Video Tutorial':
                return <VideoTutorialContent resource={resource} />;
            case 'Infographic':
                return <InfographicContent resource={resource} />;
            case 'ROI Calculator':
                return <ROICalculatorContent resource={resource} />;
            default:
                return <DefaultContent resource={resource} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                    <Link to="/" className="hover:text-purple-600">Home</Link>
                    <span>/</span>
                    <Link to="/#featured-resources" className="hover:text-purple-600">Resources</Link>
                    <span>/</span>
                    <span className="text-gray-900">{resource.title}</span>
                </nav>

                {/* Back Button */}
                <Link to="/#featured-resources" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Resources
                </Link>

                {/* Resource Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                >
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                                {getIconForType(resource.type)}
                                {resource.type}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{resource.title}</h1>
                            <p className="text-lg text-gray-600 mb-6">{resource.description}</p>
                            
                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Published: March 15, 2024
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Reading time: 10 min
                                </span>
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    By: Gravitorix Team
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex gap-3 ml-6">
                            <button className="p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                                <Share2 className="w-5 h-5 text-gray-600" />
                            </button>
                            <button className="p-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Dynamic Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {renderResourceContent()}
                </motion.div>

                {/* Related Resources */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12"
                >
                    <Header text="Related Resources" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {featureResources
                            .filter(r => r.id !== resource.id && r.type === resource.type)
                            .slice(0, 3)
                            .map(relatedResource => (
                                <Link
                                    key={relatedResource.id}
                                    to={`/resource/${relatedResource.id}`}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                                >
                                    <span className="text-xs font-semibold text-purple-600">{relatedResource.type}</span>
                                    <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2">{relatedResource.title}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-2">{relatedResource.description}</p>
                                </Link>
                            ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Content Components for each resource type
const CaseStudyContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
            <p className="text-gray-600 mb-8">
                This case study examines how our team successfully implemented a cloud migration strategy for a Fortune 500 company, 
                resulting in a 40% reduction in infrastructure costs and 60% improvement in application performance.
            </p>

            <h3 className="text-xl font-semibold mb-4">Client Background</h3>
            <p className="text-gray-600 mb-6">
                Our client, a leading financial services company with over 10,000 employees, was struggling with legacy infrastructure 
                that couldn't scale to meet growing customer demands.
            </p>

            <h3 className="text-xl font-semibold mb-4">Challenges</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Outdated on-premise infrastructure limiting scalability</li>
                <li>High maintenance costs and frequent downtime</li>
                <li>Inability to deploy new features quickly</li>
                <li>Security vulnerabilities in legacy systems</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
            <p className="text-gray-600 mb-6">
                We implemented a phased cloud migration approach using AWS services, including EC2, RDS, and Lambda functions. 
                The migration was completed over 6 months with zero downtime.
            </p>

            <div className="bg-purple-50 rounded-lg p-6 my-8">
                <h4 className="text-lg font-semibold mb-3">Key Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">40%</div>
                        <div className="text-sm text-gray-600">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">60%</div>
                        <div className="text-sm text-gray-600">Performance Increase</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">99.9%</div>
                        <div className="text-sm text-gray-600">Uptime Achieved</div>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
                {['AWS EC2', 'AWS RDS', 'AWS Lambda', 'Docker', 'Kubernetes', 'Terraform'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">{tech}</span>
                ))}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold mb-3">Client Testimonial</h4>
                <blockquote className="italic text-gray-600">
                    "The migration to AWS transformed our business. We can now deploy new features in days instead of months, 
                    and our infrastructure costs have dropped significantly. The Gravitorix team's expertise was invaluable."
                </blockquote>
                <cite className="block mt-3 text-sm text-gray-500">- John Smith, CTO</cite>
            </div>
        </div>
    </div>
);

const WhitepaperContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Abstract</h2>
            <p className="text-gray-600 mb-8">
                This whitepaper provides a comprehensive guide to implementing DevOps practices in enterprise environments. 
                We explore CI/CD pipelines, automation strategies, and cultural transformation required for successful DevOps adoption.
            </p>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-3">Table of Contents</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                    <li>Introduction to DevOps</li>
                    <li>Building a DevOps Culture</li>
                    <li>CI/CD Pipeline Architecture</li>
                    <li>Automation Best Practices</li>
                    <li>Monitoring and Observability</li>
                    <li>Security in DevOps (DevSecOps)</li>
                    <li>Case Studies and Results</li>
                    <li>Implementation Roadmap</li>
                </ol>
            </div>

            <h3 className="text-xl font-semibold mb-4">Introduction</h3>
            <p className="text-gray-600 mb-6">
                DevOps represents a fundamental shift in how organizations develop, deploy, and maintain software. 
                By breaking down silos between development and operations teams, companies can achieve faster delivery, 
                higher quality, and improved collaboration.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Reduced time to market by up to 50%</li>
                <li>Improved deployment frequency by 200x</li>
                <li>Lower failure rate of new releases</li>
                <li>Faster recovery from incidents</li>
            </ul>

            <div className="bg-purple-100 rounded-lg p-6 text-center my-8">
                <h4 className="text-lg font-semibold mb-3">Download Full Whitepaper</h4>
                <p className="text-gray-600 mb-4">Get the complete 25-page whitepaper with detailed implementation strategies</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Download PDF (2.5 MB)
                </button>
            </div>
        </div>
    </div>
);

const EbookContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white mb-8">
                <h2 className="text-3xl font-bold mb-4">Cybersecurity in 2024</h2>
                <p className="text-lg mb-6">Essential security strategies every business needs</p>
                <div className="flex gap-4">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                        Download PDF
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                        Download EPUB
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Pages</h3>
                    <p className="text-2xl font-bold text-purple-600">156</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Chapters</h3>
                    <p className="text-2xl font-bold text-purple-600">12</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Reading Time</h3>
                    <p className="text-2xl font-bold text-purple-600">4 hrs</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Chapter Overview</h3>
            <div className="space-y-3">
                {[
                    'The Current Threat Landscape',
                    'Zero Trust Security Model',
                    'Cloud Security Best Practices',
                    'AI-Powered Threat Detection',
                    'Incident Response Planning',
                    'Employee Security Training'
                ].map((chapter, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <span className="font-medium">Chapter {index + 1}: {chapter}</span>
                        <span className="text-sm text-gray-500">Page {index * 13 + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const WebinarContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Webinar Video Player</p>
                    <p className="text-sm text-gray-400">Duration: 45 minutes</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">About This Webinar</h3>
                    <p className="text-gray-600 mb-4">
                        Join our AI experts as they explore how artificial intelligence and machine learning can transform 
                        your business operations, improve decision-making, and create competitive advantages.
                    </p>
                    <h4 className="font-semibold mb-2">Key Topics:</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>AI/ML fundamentals for business leaders</li>
                        <li>Real-world use cases and ROI</li>
                        <li>Implementation strategies</li>
                        <li>Common pitfalls and how to avoid them</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-4">Speaker</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                            <div>
                                <h4 className="font-semibold">Dr. Sarah Johnson</h4>
                                <p className="text-sm text-gray-600">Chief AI Officer</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">
                            15+ years experience in AI/ML with expertise in enterprise implementations.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h4 className="font-semibold mb-3">Resources</h4>
                        <div className="space-y-2">
                            <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-between">
                                <span>Presentation Slides</span>
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-between">
                                <span>Q&A Transcript</span>
                                <Download className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">Upcoming Webinars</h3>
                <p className="text-gray-600 mb-4">Don't miss our next live session!</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    View Schedule
                </button>
            </div>
        </div>
    </div>
);

const TechnicalGuideContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">Microservices Architecture Guide</h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
                <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc pl-5 text-gray-600">
                    <li>Basic understanding of software architecture</li>
                    <li>Familiarity with REST APIs</li>
                    <li>Docker and containerization concepts</li>
                </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4">1. Introduction to Microservices</h3>
            <p className="text-gray-600 mb-6">
                Microservices architecture is an approach to building applications as a collection of small, 
                autonomous services, each running in its own process and communicating via lightweight mechanisms.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. Design Principles</h3>
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <pre className="text-sm overflow-x-auto">
{`// Example: Service Definition
const userService = {
  name: 'user-service',
  port: 3001,
  endpoints: [
    'GET /users',
    'POST /users',
    'GET /users/:id',
    'PUT /users/:id',
    'DELETE /users/:id'
  ],
  database: 'users_db',
  dependencies: ['auth-service', 'notification-service']
};`}
                </pre>
            </div>

            <h3 className="text-xl font-semibold mb-4">3. Implementation Steps</h3>
            <ol className="list-decimal pl-6 space-y-4 text-gray-600">
                <li>
                    <strong>Define Service Boundaries</strong>
                    <p>Identify business capabilities and map them to services</p>
                </li>
                <li>
                    <strong>Design APIs</strong>
                    <p>Create clear, versioned APIs for inter-service communication</p>
                </li>
                <li>
                    <strong>Implement Services</strong>
                    <p>Build each service with its own data store and business logic</p>
                </li>
                <li>
                    <strong>Set Up Service Discovery</strong>
                    <p>Implement dynamic service registration and discovery</p>
                </li>
            </ol>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold mb-3">Troubleshooting Tips</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Service communication failures: Check network policies and service discovery</li>
                    <li>Data consistency issues: Implement saga patterns for distributed transactions</li>
                    <li>Performance problems: Use caching and optimize database queries</li>
                </ul>
            </div>
        </div>
    </div>
);

const IndustryReportContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
            <p className="text-gray-600 mb-8">
                Our 2024 State of Cloud Computing report reveals that 94% of enterprises now use cloud services, 
                with multi-cloud strategies becoming the norm. This comprehensive report analyzes trends, challenges, 
                and opportunities in the cloud computing landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {[
                    { label: 'Companies Surveyed', value: '2,500+' },
                    { label: 'Countries', value: '45' },
                    { label: 'Industries', value: '18' },
                    { label: 'Report Pages', value: '85' }
                ].map((stat, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 text-white text-center">
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
            <div className="space-y-4 mb-8">
                <div className="border-l-4 border-purple-600 pl-4">
                    <h4 className="font-semibold">Multi-Cloud Adoption</h4>
                    <p className="text-gray-600">87% of enterprises have adopted multi-cloud strategies</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold">Security Concerns</h4>
                    <p className="text-gray-600">Cloud security remains the top concern for 65% of organizations</p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                    <h4 className="font-semibold">Cost Optimization</h4>
                    <p className="text-gray-600">42% struggle with cloud cost management and optimization</p>
                </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Report Sections</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Market Overview and Growth Projections</li>
                    <li>Technology Trends and Innovations</li>
                    <li>Adoption Patterns by Industry</li>
                    <li>Security and Compliance Landscape</li>
                    <li>Future Predictions and Recommendations</li>
                </ul>
            </div>

            <div className="text-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg">
                    Download Full Report (PDF)
                </button>
            </div>
        </div>
    </div>
);

const ChecklistContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">IT Infrastructure Audit Checklist</h2>
            <p className="text-gray-600 mb-8">
                Use this comprehensive checklist to evaluate and optimize your IT infrastructure. 
                Check off items as you complete them and track your progress.
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Network Infrastructure</h3>
                    <div className="space-y-3">
                        {[
                            'Network topology documented and up-to-date',
                            'Redundant internet connections configured',
                            'Firewall rules reviewed and optimized',
                            'VPN access properly secured',
                            'Network monitoring tools in place'
                        ].map((item, index) => (
                            <label key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="checkbox" className="mt-1" />
                                <span className="text-gray-700">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Security</h3>
                    <div className="space-y-3">
                        {[
                            'Security policies documented and enforced',
                            'Regular security audits scheduled',
                            'Endpoint protection deployed on all devices',
                            'Data encryption implemented',
                            'Incident response plan in place'
                        ].map((item, index) => (
                            <label key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="checkbox" className="mt-1" />
                                <span className="text-gray-700">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Backup and Recovery</h3>
                    <div className="space-y-3">
                        {[
                            'Automated backup systems configured',
                            'Backup testing performed regularly',
                            'Disaster recovery plan documented',
                            'RTO and RPO defined and tested',
                            'Off-site backup storage implemented'
                        ].map((item, index) => (
                            <label key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="checkbox" className="mt-1" />
                                <span className="text-gray-700">{item}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Download PDF Version
                </button>
                <button className="flex-1 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                    Print Checklist
                </button>
            </div>
        </div>
    </div>
);

const TemplateContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Project Management Templates</h2>
            <p className="text-gray-600 mb-8">
                Ready-to-use templates for agile project management and sprint planning. 
                Download in multiple formats and customize for your team's needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    {
                        name: 'Sprint Planning Template',
                        description: 'Organize your sprint goals, user stories, and capacity planning',
                        formats: ['Excel', 'Google Sheets', 'CSV']
                    },
                    {
                        name: 'Product Backlog Template',
                        description: 'Prioritize features and track development progress',
                        formats: ['Excel', 'Notion', 'Jira']
                    },
                    {
                        name: 'Retrospective Template',
                        description: 'Conduct effective team retrospectives and track improvements',
                        formats: ['Miro', 'Figma', 'PDF']
                    },
                    {
                        name: 'Release Planning Template',
                        description: 'Plan releases, milestones, and deliverables',
                        formats: ['Excel', 'Asana', 'Monday.com']
                    }
                ].map((template, index) => (
                    <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
                        <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {template.formats.map(format => (
                                <span key={format} className="text-xs px-2 py-1 bg-gray-100 rounded">{format}</span>
                            ))}
                        </div>
                        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
                            Download Template
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold mb-3">How to Use These Templates</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>Download the template in your preferred format</li>
                    <li>Customize fields and categories for your team</li>
                    <li>Share with your team and set up access permissions</li>
                    <li>Start using in your next sprint or project</li>
                </ol>
            </div>
        </div>
    </div>
);

const VideoTutorialContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center text-white">
                    <Video className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Video Tutorial Player</p>
                    <p className="text-sm text-gray-400">Total Duration: 2 hours 15 minutes</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Difficulty</h3>
                    <p className="text-purple-600">Intermediate</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Chapters</h3>
                    <p className="text-purple-600">15 Lessons</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Certificate</h3>
                    <p className="text-purple-600">Available</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Course Content</h3>
            <div className="space-y-3 mb-8">
                {[
                    { title: 'Introduction to Kubernetes', duration: '8:30' },
                    { title: 'Setting Up Your Environment', duration: '12:15' },
                    { title: 'Understanding Pods and Containers', duration: '15:45' },
                    { title: 'Working with Deployments', duration: '18:20' },
                    { title: 'Services and Networking', duration: '22:10' },
                    { title: 'ConfigMaps and Secrets', duration: '14:30' }
                ].map((chapter, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold">
                                {index + 1}
                            </div>
                            <span className="font-medium">{chapter.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{chapter.duration}</span>
                    </div>
                ))}
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Exercise Files</h3>
                <p className="text-gray-600 mb-4">Download the exercise files to follow along with the tutorial</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Download Exercise Files (45 MB)
                </button>
            </div>
        </div>
    </div>
);

const InfographicContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-200 rounded-lg aspect-[3/4] mb-8 flex items-center justify-center">
                <div className="text-gray-500">
                    <BarChart className="w-24 h-24 mx-auto mb-4" />
                    <p className="text-lg">Data Privacy Regulations Infographic</p>
                    <p className="text-sm">Click to zoom</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Key Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                {[
                    'GDPR applies to all EU citizens data globally',
                    'CCPA gives California residents control over personal data',
                    'Fines can reach up to 4% of annual global turnover',
                    'Data breach notifications required within 72 hours'
                ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5">
                            {index + 1}
                        </div>
                        <p className="text-gray-700">{point}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Download High-Res (PNG)
                </button>
                <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                    Get Embed Code
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                    Share
                </button>
            </div>
        </div>
    </div>
);

const ROICalculatorContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Cloud Migration ROI Calculator</h2>
            <p className="text-gray-600 mb-8">
                Calculate your potential savings and benefits from migrating to the cloud. 
                Enter your current infrastructure costs and see the projected ROI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Current Infrastructure Costs</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Monthly Hardware Costs ($)
                            </label>
                            <input type="number" className="w-full border rounded-lg px-4 py-2" placeholder="10000" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Monthly Maintenance Costs ($)
                            </label>
                            <input type="number" className="w-full border rounded-lg px-4 py-2" placeholder="5000" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                IT Staff Hours per Month
                            </label>
                            <input type="number" className="w-full border rounded-lg px-4 py-2" placeholder="320" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Average Downtime Hours per Month
                            </label>
                            <input type="number" className="w-full border rounded-lg px-4 py-2" placeholder="5" />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Projected Cloud Costs</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>Estimated Cloud Infrastructure</span>
                                <span className="font-semibold">$7,500/mo</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Reduced Maintenance</span>
                                <span className="font-semibold">$1,000/mo</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Reduced IT Hours</span>
                                <span className="font-semibold">160 hrs/mo</span>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between text-lg">
                                <span className="font-semibold">Total Monthly Savings</span>
                                <span className="font-bold text-green-600">$6,500</span>
                            </div>
                            <div className="flex justify-between text-lg">
                                <span className="font-semibold">Annual ROI</span>
                                <span className="font-bold text-green-600">43%</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors mt-6">
                        Calculate My ROI
                    </button>
                </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold mb-3">Ready to Start Your Cloud Journey?</h3>
                <p className="text-gray-600 mb-4">
                    Our cloud experts can provide a detailed assessment and migration plan tailored to your needs.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule a Consultation
                </button>
            </div>
        </div>
    </div>
);

const DefaultContent = ({ resource }) => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-6">{resource.title}</h2>
            <p className="text-gray-600 mb-8">{resource.description}</p>
            
            <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">About This Resource</h3>
                <p className="text-gray-600">
                    This {resource.type} provides valuable insights and practical guidance for IT professionals 
                    and business leaders looking to leverage technology for competitive advantage.
                </p>
            </div>

            <div className="mt-8 flex gap-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Download Resource
                </button>
                <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">
                    Share
                </button>
            </div>
        </div>
    </div>
);

export default ResourceDetail;