import React, { Component, useState, useEffect, useRef } from "react";
import CostumePic from "../public/images/costume.jpg";
import AudioPic from "../public/images/audio.jpg";
import WeldingPic from "../public/images/welding.jpg";
import EditingPic from "../public/images/editing.jpg";
import AgriculturePic from "../public/images/agriculture.jpg";
import SculpturePic from "../public/images/sculpture.jpg";
import InnovationPic from "../public/images/innovation.jpg";
import AutoPic from "../public/images/autotech.jpg";
import LinuxPic from "../public/images/linux.jpg";
import PhotoPic from "../public/images/photography.jpg";
import IndustrialPic from "../public/images/electronics.jpg";
import ChildPic from "../public/images/child.jpg";
import Background from "../public/images/hexagonbackground.jpg";
import Image from "next/image";

function Centers({workspaceRef, workspaceMobileRef}) {

  const Workspace = ({ text, image, description, link }) => (
    <div
      className="relative flex justify-center items-center flex-col w-[340px] mb-[60px]
    xxlr:mb-[40px] xlr:mb-[30px] x3lr:w-[320px] xxlr:w-[270px] xlr:w-[220px] lr:w-[240px] 
    md:w-[180px] sm:w-[240px]"
    >
      <h2
        className="text-[35px] font-[500] text-[#005596] mb-[20px] text-center
      xxlr:text-[28px] xlr:text-[24px] lr:text-[26px] md:text-[18px] sm:text-[25px]"
      >
        {text}
      </h2>
      <div className="relative cursor-pointer hover:scale-[1.05] duration-300 ease-in-out">
        <a href={link} target="_blank">
          <Image src={image}></Image>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center opacity-0
        bg-black hover:opacity-80 transition-opacity duration-300 ease-in-out"
          >
            <p className="text-white px-[20px] text-[16px] xxlr:text-[14px] xlr:text-[11px] 
            text-center lr:text-[12px] md:text-[9px] md:px-[15px] sm:text-[13px]">{description}</p>
          </div>
        </a>
      </div>
      <div className="text-[#005596] font-[500] text-[18px] text-center mt-[20px]
      xxlr:text-[16px] xlr:text-[14px] lr:text-[12px] sm:text-[14px]">
        <p>Insert the workspace&apos;s availability</p>
        <p>Insert the office hours open</p>
        <p>Insert the location and room</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative flex justify-center items-center pt-[200px] lr:pt-[160px] xmd:pt-[120px] flex-col mr-auto ml-auto max-w-[1800px]"
        ref={workspaceMobileRef}>
        <h1 className="text-[3.8vw] font-[600] text-[#001E60] mb-[80px] lr:mb-[60px] lr:text-[30px] 
        lr:px-[35px] text-center xxxlr:text-[75px] xsm:text-[28px] sm:px-[20px] sm:mb-[40px] pt-[20px] md:pt-[0px]"
        ref={workspaceRef}>
          Visit MJC&apos;s Diverse Number of Workspaces
        </h1>
        <div
          className="flex items-end flex-wrap justify-around px-[80px] xxlr:px-[50px] 
        lr:px-[40px] gap-[40px]"
        >
          <Workspace
            text="Innovation Center"
            image={InnovationPic}
            link={"https://mjc.edu/schools/sm/innovationcenter/"}
            description={
              "A collaborative area where people can create, invent, build, and test using traditional craft making methods and new-technology. Capabilities include 3D printing, laser cutting, vinyl printing, circuit building, and sewing.  The space has supplies and tools for art and textile projects, comic creation, and prototyping."
            }
          ></Workspace>

          <Workspace
            text="Theater Design"
            image={CostumePic}
            link={"https://www.mjc.edu/instruction/ahc/theatre.php"}
            description={
              "The program is designed to teach students the techniques of acting, dance, costuming, directing, playwriting, lighting, make-up, oral interpretation, and stage design. Opportunities also exist for narrators, costume designers, wardrobe workers, make-up and hair stylists, lighting designers, stage managers, and actors."
            }
          ></Workspace>

          <Workspace
            text="Media Studio"
            image={AudioPic}
            link={"https://www.mjc.edu/instruction/ahc/"}
            description={
              "The studio serves performing and visual arts experiences. The Art Gallery presents a variety of shows each year focused on student, faculty and community work. This includes an outstanding community orchestra, the Theatre and Dance Department, the Communication Studies Program, and the MJC Speech & Debate Team."
            }
          ></Workspace>

          <Workspace
            text="Welding Center"
            image={WeldingPic}
            link={"https://www.mjc.edu/instruction/teched/weld.php"}
            description={
              "The center offers instruction in basic and advanced welding and is designed to teach students welding of ferrous and nonferrous metals. Instruction is given in the various welding techniques, including flat, vertical, over head, and pipe. Related technical phases of welding are also covered."
            }
          ></Workspace>

          <Workspace
            text="Magic Lab"
            image={EditingPic}
            link={"https://www.mjc.edu/instruction/bbss/magic.php"}
            description={
              "An acronym for Multimedia, Animation, Graphics, Internet, and Computing. This lab is dedicated to the computing needs of the Computer Science and Computer Graphics departments at Modesto Junior College."
            }
          ></Workspace>

          <Workspace
            text="Ag Units"
            image={AgriculturePic}
            link={
              "https://www.mjc.edu/president/pathways/school_of_ag_programs.php"
            }
            description={
              "This program offers educational opportunities for students in a variety of agriculture related areas. Programs offer diverse studies in business, mechanics, plants, animals and the environment to help students be successful in this essential industry."
            }
          ></Workspace>

          <Workspace
            text="Arts and Sculptures"
            image={SculpturePic}
            link={"https://www.mjc.edu/instruction/ahc/art.php"}
            description={
              "This program offers art history, ceramics, computer graphics, drawing, design, sculpture, acrylic painting, oil painting, and photography. It is also designed to include pre-professional and professional courses, personal enrichment in specific art areas, and classes for students who plan an art-related career."
            }
          ></Workspace>

          <Workspace
            text="Auto Tech"
            image={AutoPic}
            link={"https://www.mjc.edu/instruction/teched/autec.php"}
            description={
              "The Automotive Technology program is designed to provide training in automobile repair, maintenance theory, study of factory manuals and publications, and applications of methods used in the auto servicing and repair industry."
            }
          ></Workspace>

          <Workspace
            text="Linux Lab"
            image={LinuxPic}
            link={"https://www.mjc.edu/instruction/bbss/cmpsc.php"}
            description={
              "This program provides students with the knowledge, training and hands-on skills to meet the increasing demand for computer specialists in computer science, information systems, database administration, network administration, and web development."
            }
          ></Workspace>

          <Workspace
            text="Photo Studio"
            image={PhotoPic}
            link={"https://www.mjc.edu/instruction/ahc/celebration/photography.php"}
            description={
              "Photography is both an artistic and a technical vocation. This program is designed to develop the student's aesthetic and technical abilities by working with design, composition, lighting, various types of image content, photographic processes, image critique, and presentation techniques."
            }
          ></Workspace>

          <Workspace
            text="Industrial Electronics"
            image={IndustrialPic}
            link={"https://www.mjc.edu/instruction/teched/eltec.php"}
            description={
              "This program prepares students for a career in industry as Electronics Technicians, Instrumentation Technicians, and Electricians. This includes theoretical and laboratory instruction in electrical/electronic principles, systems, analog and digital devices, computer hardware, industrial equipment and control systems."
            }
          ></Workspace>

          <Workspace
            text="Child Development"
            image={ChildPic}
            link={"https://www.mjc.edu/instruction/fcs/clddv.php"}
            description={
              "This program offers theoretical and practical courses, which focus on the growth and development of children from conception to adolescence. Students use this knowledge to create culturally relevant, inclusive, age-appropriate, anti-bias environments that promote optimum care and learning opportunities."
            }
          ></Workspace>
        </div>

        {/* <Image className="absolute object-contain top-20 w-full bg-cover bg-repeat-y bg-fixed bg-center opacity-10 z-[-1]" src={Background}></Image> */}
      </div>
    </>
  );
}

export default Centers;
