import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

// Product images
import aquaImg from '@/assets/products/aqua.png';
import optimaImg from '@/assets/products/optima.png';
import flaviaImg from '@/assets/products/flavia.png';
import trimlessFlaviaImg from '@/assets/products/trimless-flavia.png';
import strikeImg from '@/assets/products/strike.png';
import linenProImg from '@/assets/products/linen-pro.png';
import trimlessRioImg from '@/assets/products/trimless-rio.png';
import butterflyImg from '@/assets/products/butterfly.png';
import cdoreImg from '@/assets/products/cdore.png';
import brezzaImg from '@/assets/products/brezza.png';
import experiaImg from '@/assets/products/experia.png';
import rosellaImg from '@/assets/products/rosella.png';
import glanzaImg from '@/assets/products/glanza.png';
import adoreImg from '@/assets/products/adore.png';
import sleekImg from '@/assets/products/sleek.png';
import poloImg from '@/assets/products/polo.png';
import wonderImg from '@/assets/products/wonder.png';
import pipeImg from '@/assets/products/pipe.png';
import rioImg from '@/assets/products/rio.png';
import cometImg from '@/assets/products/comet.png';
import swiftImg from '@/assets/products/swift.png';
import glacierImg from '@/assets/products/glacier.png';
import matrixImg from '@/assets/products/matrix.png';
import parkarImg from '@/assets/products/parkar.png';
import beltonImg from '@/assets/products/belton.png';
import streakImg from '@/assets/products/streak.png';
import zudioImg from '@/assets/products/zudio.png';
import nexonImg from '@/assets/products/nexon.png';
import battlerImg from '@/assets/products/battler.png';
import coralImg from '@/assets/products/coral.png';
import jawaImg from '@/assets/products/jawa.png';
import zoomImg from '@/assets/products/zoom.png';
import nebulaImg from '@/assets/products/nebula.png';
import smps1Img from '@/assets/products/smps1.png';
import smps2Img from '@/assets/products/smps2.png';
import harmonyImg from '@/assets/products/harmony.png';
import seltosImg from '@/assets/products/seltos.png';
import deltaImg from '@/assets/products/delta.png';
import curvyImg from '@/assets/products/curvy.png';
import beatImg from '@/assets/products/beat.png';
import crestaImg from '@/assets/products/cresta.png';
import cliffImg from '@/assets/products/cliff.png';
import coneImg from '@/assets/products/cone.png';
import gunblackconImg from '@/assets/products/gunblackcone.png';
import curvy1Img from '@/assets/products/curvy1.png';
import alphaImg from '@/assets/products/alpha.png';
import minideltaImg from '@/assets/products/minidelta.png';
import cobbuttonlightImg from '@/assets/products/cobbuttonlight.png';
import pulloutImg from '@/assets/products/pullout.png';
import trittonImg from '@/assets/products/tritton.png';
import opelImg from '@/assets/products/opel.png';
import novaImg from '@/assets/products/nova.png';
import cone1Img from '@/assets/products/cone1.png';
import roundlineaImg from '@/assets/products/roundlinea.png';
import loopImg from '@/assets/products/loop.png';
import lineaImg from '@/assets/products/linea.png';
import platinumImg from '@/assets/products/platinum.png';
import trumpImg from '@/assets/products/trump.png';
import bradoImg from '@/assets/products/brado.png';
import graceshineImg from '@/assets/products/graceshine.png';
import pencilImg from '@/assets/products/pencil.png';
import briskImg from '@/assets/products/brisk.png';
import deepdownlightImg from '@/assets/products/deepdownlight.png';
import nexaImg from '@/assets/products/nexa.png';
import galaxyImg from '@/assets/products/galaxy.png';
import graceImg from '@/assets/products/grace.png';
import gracecylinderImg from '@/assets/products/gracecylinder.png';
import dazzleImg from '@/assets/products/dazzle.png';
import panellightImg from '@/assets/products/panellight.png';
import surfacepanellightImg from '@/assets/products/surfacepanellight.png';
import nexasurfaceImg from '@/assets/products/nexasurface.png';
import cromaImg from '@/assets/products/croma.png';
import amorImg from '@/assets/products/amor.png';
import eyeballsurfaceImg from '@/assets/products/eyeballsurface.png';
import ledpanelImg from '@/assets/products/ledpanel.png';
import glossierImg from '@/assets/products/glossier.png';
import deltaproImg from '@/assets/products/deltapro.png';
import ceraImg from '@/assets/products/cera.png';


type ProductCategory = 'all' | 'decorative' | 'architectural' | 'outdoor' | 'custom' | 'surface' | 'panel' | 'trimless';

interface ProductSpec {
  wattage: string;
  outer: string;
  cutout: string;
  height: string;
  beamAngle: string;
  bodyColor: string;
}

interface Product {
  id: string;
  name: string;
  model: string;
  category: ProductCategory;
  categoryLabel: string;
  specs: ProductSpec[];
  colorTemps: string[];
  features: {
    saving: string;
    pf: string;
    eco: boolean;
  };
  image?: string;
}

const products: Product[] = [
  // Page 4 - AQUA
  {
    id: 'aqua-cl979',
    name: 'AQUA',
    model: 'CL 979',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '8 Watt', outer: '53', cutout: '45', height: '61', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '63', cutout: '55', height: '78', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '83', cutout: '75', height: '83', beamAngle: '36°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: aquaImg,
  },
  // Page 4 - OPTIMA
  {
    id: 'optima-cl978',
    name: 'OPTIMA',
    model: 'CL 978',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '62', cutout: '55', height: '83', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '72', cutout: '65', height: '95', beamAngle: '36°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: optimaImg,
  },
  // Page 5 - FLAVIA
  {
    id: 'flavia-cl973',
    name: 'FLAVIA',
    model: 'CL 973',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '43', cutout: '35', height: '86', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '63', cutout: '55', height: '94', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '81', cutout: '75', height: '110', beamAngle: '36°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: flaviaImg,
  },
  // Page 5 - TRIMLESS FLAVIA
  {
    id: 'trimless-flavia-cl974',
    name: 'TRIMLESS FLAVIA',
    model: 'CL 974',
    category: 'trimless',
    categoryLabel: 'Trimless Lighting',
    specs: [
      { wattage: '7 Watt', outer: '60', cutout: '35', height: '97', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '75', cutout: '55', height: '100', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '90', cutout: '70', height: '105', beamAngle: '36°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: trimlessFlaviaImg,
  },
  // Page 6 - STRIKE
  {
    id: 'strike-cl981',
    name: 'STRIKE',
    model: 'CL 981',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '6 Watt', outer: '102×41', cutout: '60×35', height: '54', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '162×41', cutout: '120×35', height: '54', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: strikeImg,
  },
  // Page 6 - LINEA PRO
  {
    id: 'linea-pro-cl982',
    name: 'LINEA PRO',
    model: 'CL 982',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '6 Watt', outer: '97×43', cutout: '92×35', height: '44', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '150×43', cutout: '142×35', height: '44', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '20 Watt', outer: '283×46', cutout: '275×35', height: '44', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: linenProImg,
  },
  // Page 7 - TRIMLESS RIO
  {
    id: 'trimless-rio-cl980',
    name: 'TRIMLESS RIO',
    model: 'CL 980',
    category: 'trimless',
    categoryLabel: 'Trimless Lighting',
    specs: [
      { wattage: '12 Watt', outer: '75', cutout: '85', height: '36', beamAngle: '-', bodyColor: 'WH/BK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: trimlessRioImg,
  },
  // Page 7 - BUTTERFLY
  {
    id: 'butterfly-cl975',
    name: 'BUTTERFLY',
    model: 'CL 975',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '55', cutout: '45', height: '98', beamAngle: '24°', bodyColor: 'WH/BK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: butterflyImg,
  },
  // Page 8 - CDORE
  {
    id: 'cdore-cl983',
    name: 'CDORE',
    model: 'CL 983',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '62', cutout: '55', height: '55', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '72', cutout: '65', height: '60', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '82', cutout: '75', height: '63', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: cdoreImg,
  },
  // Page 8 - EXPERIA
  {
    id: 'experia-cl972',
    name: 'EXPERIA',
    model: 'CL 972',
    category: 'custom',
    categoryLabel: 'Custom Solutions',
    specs: [
      { wattage: '7 Watt', outer: '68', cutout: '58', height: '45', beamAngle: '24°', bodyColor: 'WH/BK' },
      { wattage: '12 Watt', outer: '83', cutout: '75', height: '60', beamAngle: '36°', bodyColor: 'WH/BK' },
      { wattage: '18 Watt', outer: '103', cutout: '93', height: '70', beamAngle: '36°', bodyColor: 'WH/BK' },
      { wattage: '7×2 Watt', outer: '134×68', cutout: '125×55', height: '50', beamAngle: '24°', bodyColor: 'WH/BK' },
      { wattage: '12×2 Watt', outer: '169×85', cutout: '160×75', height: '62', beamAngle: '36°', bodyColor: 'WH/BK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: experiaImg,
  },
  // Page 9 - BREZZA
  {
    id: 'brezza-cl984',
    name: 'BREZZA',
    model: 'CL 984',
    category: 'outdoor',
    categoryLabel: 'Outdoor Lighting',
    specs: [
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '50', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '115', cutout: '105', height: '50', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '24 Watt', outer: '165', cutout: '155', height: '50', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: brezzaImg,
  },
  // Page 9 - ROSELLA
  {
    id: 'rosella-cl977',
    name: 'ROSELLA',
    model: 'CL 977',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '72', cutout: '65', height: '53', beamAngle: '-', bodyColor: 'WH/BK/GBK' },
      { wattage: '12 Watt', outer: '87', cutout: '80', height: '60', beamAngle: '-', bodyColor: 'WH/BK/GBK' },
      { wattage: '18 Watt', outer: '104', cutout: '95', height: '67', beamAngle: '-', bodyColor: 'WH/BK/GBK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: rosellaImg,
  },
  // Page 10 - GLANZA
  {
    id: 'glanza-cl956',
    name: 'GLANZA',
    model: 'CL 956',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '62', cutout: '55', height: '82', beamAngle: '24°', bodyColor: 'BK/WH/GBK' },
      { wattage: '12 Watt', outer: '72', cutout: '65', height: '82', beamAngle: '36°', bodyColor: 'BK/WH/GBK' },
      { wattage: '18 Watt', outer: '82', cutout: '75', height: '82', beamAngle: '36°', bodyColor: 'BK/WH/GBK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: glanzaImg,
  },
  // Page 10 - ADORE
  {
    id: 'adore-cl957',
    name: 'ADORE',
    model: 'CL 957',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '60', cutout: '55', height: '56', beamAngle: '24°', bodyColor: 'BK/WH/GBK' },
      { wattage: '12 Watt', outer: '70', cutout: '65', height: '60', beamAngle: '38°', bodyColor: 'BK/WH/GBK' },
      { wattage: '18 Watt', outer: '80', cutout: '75', height: '70', beamAngle: '38°', bodyColor: 'BK/WH/GBK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: adoreImg,
  },
  // Page 11 - SLEEK
  {
    id: 'sleek-cl958',
    name: 'SLEEK',
    model: 'CL 958',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '42', cutout: '35', height: '56', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '54', cutout: '45', height: '70', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '65', cutout: '55', height: '85', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: sleekImg,
  },
  // Page 11 - POLO
  {
    id: 'polo-cl959',
    name: 'POLO',
    model: 'CL 959',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '5 Watt', outer: '45', cutout: '40', height: '46', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '10 Watt', outer: '60', cutout: '50', height: '60', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '15 Watt', outer: '70', cutout: '60', height: '76', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: poloImg,
  },
  // Page 12 - WONDER
  {
    id: 'wonder-cl960',
    name: 'WONDER',
    model: 'CL 960',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '84', cutout: '65', height: '65', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '84', cutout: '65', height: '65', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '105', cutout: '90', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '24-30 Watt', outer: '133', cutout: '110', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: wonderImg,
  },
  // Page 12 - PIPE
  {
    id: 'pipe-cl961',
    name: 'PIPE',
    model: 'CL 961',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '68', cutout: '60', height: '100', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '7 Watt', outer: '68', cutout: '60', height: '200', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '7 Watt', outer: '68', cutout: '60', height: '300', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: pipeImg,
  },
  // Page 13 - RIO
  {
    id: 'rio-cl962',
    name: 'RIO',
    model: 'CL 962',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '65', cutout: '55', height: '68', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '85', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '12×2 Watt', outer: '167×88', cutout: '150×75', height: '85', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: rioImg,
  },
  // Page 13 - COMET
  {
    id: 'comet-cl963',
    name: 'COMET',
    model: 'CL 963',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '45', cutout: '35', height: '65', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '10 Watt', outer: '50', cutout: '40', height: '75', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: cometImg,
  },
  // Page 14 - SWIFT
  {
    id: 'swift-cl964',
    name: 'SWIFT',
    model: 'CL 964',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '83', cutout: '75', height: '50', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '123', cutout: '115', height: '66', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: swiftImg,
  },
  // Page 14 - GLACIER
  {
    id: 'glacier-cl965',
    name: 'GLACIER',
    model: 'CL 965',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '50', cutout: '-', height: '70', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '10 Watt', outer: '70', cutout: '-', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '95', cutout: '-', height: '100', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: glacierImg,
  },
  // Page 15 - MATRIX
  {
    id: 'matrix-cl966',
    name: 'MATRIX',
    model: 'CL 966',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '55', cutout: '75', height: '24', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '75', cutout: '95', height: '24', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: matrixImg,
  },
  // Page 15 - PARKAR
  {
    id: 'parkar-cl967',
    name: 'PARKAR',
    model: 'CL 967',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '-', cutout: '58', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '10 Watt', outer: '-', cutout: '72', height: '100', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '-', cutout: '123', height: '110', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: parkarImg,
  },
  // Page 16 - BELTON
  {
    id: 'belton-cl926',
    name: 'BELTON',
    model: 'CL 926',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '-', outer: '160×55', cutout: '152×42', height: '35', beamAngle: '30°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: beltonImg,
  },
  // Page 16 - STREAK
  {
    id: 'streak-cl927',
    name: 'STREAK',
    model: 'CL 927',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '5 Watt', outer: '67', cutout: '55', height: '48', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '10 Watt', outer: '88', cutout: '75', height: '52', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: streakImg,
  },
  // Page 17 - ZUDIO
  {
    id: 'zudio-cl968',
    name: 'ZUDIO',
    model: 'CL 968',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '55', cutout: '-', height: '160', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: zudioImg,
  },
  // Page 17 - NEXON
  {
    id: 'nexon-cl905',
    name: 'NEXON',
    model: 'CL 905',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '55', beamAngle: '60°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '101', cutout: '90', height: '65', beamAngle: '60°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: nexonImg,
  },
  // Page 18 - BATTLER
  {
    id: 'battler-cl944',
    name: 'BATTLER',
    model: 'CL 944',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '82', cutout: '75', height: '45', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: battlerImg,
  },
  // Page 18 - CORAL
  {
    id: 'coral-cl932',
    name: 'CORAL',
    model: 'CL 932',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '86', cutout: '76', height: '47', beamAngle: '60°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '105', cutout: '90', height: '50', beamAngle: '60°', bodyColor: 'BK/WH' },
      { wattage: '22 Watt', outer: '130', cutout: '120', height: '60', beamAngle: '60°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: coralImg,
  },
  // Page 19 - JAWA
  {
    id: 'jawa-cl935',
    name: 'JAWA',
    model: 'CL 935',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '80', cutout: '70', height: '65', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '95', cutout: '85', height: '60', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '24 Watt', outer: '122', cutout: '115', height: '67', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: jawaImg,
  },
  // Page 19 - ZOOM
  {
    id: 'zoom-cl916',
    name: 'ZOOM',
    model: 'CL 916',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '90', cutout: '80', height: '-', beamAngle: '38°', bodyColor: 'WH' },
      { wattage: '18 Watt', outer: '110', cutout: '100', height: '-', beamAngle: '38°', bodyColor: 'WH' },
      { wattage: '30 Watt', outer: '135', cutout: '125', height: '-', beamAngle: '38°', bodyColor: 'WH' },
      { wattage: '40 Watt', outer: '165', cutout: '155', height: '-', beamAngle: '38°', bodyColor: 'WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: zoomImg,
  },
  // Page 20 - NEBULA
  {
    id: 'nebula-cl924',
    name: 'NEBULA',
    model: 'CL 924',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '-', outer: '140', cutout: '32', height: '56', beamAngle: '30°', bodyColor: 'BK' },
      { wattage: '-', outer: '280', cutout: '32', height: '56', beamAngle: '30°', bodyColor: 'BK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: nebulaImg,
  },
  // Page 20 - SMPS (12V)
  {
    id: 'smps-12v-cl969',
    name: 'SMPS (12V)',
    model: 'CL 969',
    category: 'custom',
    categoryLabel: 'Custom Solutions',
    specs: [
      { wattage: '2.5A - 30W', outer: '120', cutout: '36', height: '21', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '5A - 60W', outer: '124', cutout: '43', height: '22', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '8A - 100W', outer: '165', cutout: '50', height: '23', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '12.5A - 150W', outer: '205', cutout: '50', height: '23', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '16.5A - 200W', outer: '238', cutout: '50', height: '23', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: smps1Img,
  },
  // Page 21 - SMPS (24V)
  {
    id: 'smps-24v-cl970',
    name: 'SMPS (24V)',
    model: 'CL 970',
    category: 'custom',
    categoryLabel: 'Custom Solutions',
    specs: [
      { wattage: '2.5A - 60W', outer: '120', cutout: '36', height: '21', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '5A - 120W', outer: '124', cutout: '43', height: '22', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '8A - 200W', outer: '165', cutout: '50', height: '23', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '12.5A - 300W', outer: '205', cutout: '50', height: '23', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '16.5A - 400W', outer: '238', cutout: '50', height: '23', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: smps2Img,
  },
  // Page 21 - HARMONY
  {
    id: 'harmony-cl906',
    name: 'HARMONY',
    model: 'CL 906',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '73', cutout: '65', height: '65', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '80', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '93', cutout: '85', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: harmonyImg,
  },
  // Page 22 - SELTOS
  {
    id: 'seltos-cl907',
    name: 'SELTOS',
    model: 'CL 907',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '65', cutout: '58', height: '65', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '80', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: seltosImg,
  },
  // Page 22 - DELTA
  {
    id: 'delta-cl901',
    name: 'DELTA',
    model: 'CL 901',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '63', cutout: '58', height: '61', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '84', cutout: '75', height: '75', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '90', cutout: '82', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '28 Watt', outer: '115', cutout: '105', height: '105', beamAngle: '48°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: deltaImg,
  },
  // Page 23 - CURVY
  {
    id: 'curvy-cl902',
    name: 'CURVY',
    model: 'CL 902',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '68', cutout: '60', height: '55', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '65', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '95', cutout: '85', height: '81', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '28 Watt', outer: '120', cutout: '110', height: '96', beamAngle: '48°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: curvyImg,
  },
  // Page 23 - BEAT
  {
    id: 'beat-cl908',
    name: 'BEAT',
    model: 'CL 908',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '70', cutout: '60', height: '50', beamAngle: '60°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '80', cutout: '70', height: '60', beamAngle: '60°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '95', cutout: '85', height: '65', beamAngle: '60°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: beatImg,
  },
  // Page 24 - CRESTA
  {
    id: 'cresta-cl925',
    name: 'CRESTA',
    model: 'CL 925',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '128×50', cutout: '118×42', height: '55', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '20 Watt', outer: '205×50', cutout: '195×42', height: '55', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: crestaImg,
  },
  // Page 24 - CLIFF
  {
    id: 'cliff-cl930',
    name: 'CLIFF',
    model: 'CL 930',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '70', cutout: '60', height: '65', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '75', beamAngle: '36°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: cliffImg,
  },
  // Page 25 - CONE
  {
    id: 'cone-cl909',
    name: 'CONE',
    model: 'CL 909',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '40', cutout: '35', height: '55', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '60', cutout: '55', height: '80', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '75', cutout: '68', height: '95', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: coneImg,
  },
  // Page 25 - GUN BLACK CONE
  {
    id: 'gun-black-cone-cl910',
    name: 'GUN BLACK CONE',
    model: 'CL 910',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '40', cutout: '35', height: '55', beamAngle: '24°', bodyColor: 'GBK' },
      { wattage: '12 Watt', outer: '60', cutout: '55', height: '80', beamAngle: '38°', bodyColor: 'GBK' },
      { wattage: '18 Watt', outer: '75', cutout: '68', height: '95', beamAngle: '38°', bodyColor: 'GBK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: gunblackconImg,
  },
  // Page 26 - CURVY MINI
  {
    id: 'curvy-mini-cl911',
    name: 'CURVY MINI',
    model: 'CL 911',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '3 Watt', outer: '48', cutout: '35', height: '30', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: curvy1Img,
  },
  // Page 26 - ALPHA
  {
    id: 'alpha-cl912',
    name: 'ALPHA',
    model: 'CL 912',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '3 Watt', outer: '50', cutout: '42', height: '50', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: alphaImg,
  },
  // Page 27 - MINI DELTA
  {
    id: 'mini-delta-cl913',
    name: 'MINI DELTA',
    model: 'CL 913',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '3 Watt', outer: '38', cutout: '30', height: '30', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: minideltaImg,
  },
  // Page 27 - COB BUTTON LIGHT
  {
    id: 'cob-button-cl914',
    name: 'COB BUTTON LIGHT',
    model: 'CL 914',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '1 Watt', outer: '34', cutout: '24', height: '-', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '3 Watt', outer: '40', cutout: '30', height: '-', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: cobbuttonlightImg,
  },
  // Page 28 - PULLOUT
  {
    id: 'pullout-cl915',
    name: 'PULLOUT',
    model: 'CL 915',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '72', cutout: '65', height: '110', beamAngle: '25°', bodyColor: 'BK/WH' },
      { wattage: '7 Watt Compact', outer: '60', cutout: '50', height: '90', beamAngle: '25°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '100', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '105', cutout: '92', height: '110', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '12×2 Watt', outer: '184×100', cutout: '175×90', height: '110', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: pulloutImg,
  },
  // Page 28 - TRITTON
  {
    id: 'tritton-cl917',
    name: 'TRITTON',
    model: 'CL 917',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '75', cutout: '65', height: '115', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: trittonImg,
  },
  // Page 29 - OPEL
  {
    id: 'opel-cl918',
    name: 'OPEL',
    model: 'CL 918',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '100', cutout: '100', height: '-', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: opelImg,
  },
  // Page 29 - NOVA
  {
    id: 'nova-cl919',
    name: 'NOVA',
    model: 'CL 919',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '54', cutout: '80', height: '38', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '73', cutout: '100', height: '38', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '93', cutout: '115', height: '38', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: novaImg,
  },
  // Page 30 - CONE RG
  {
    id: 'cone-rg-cl910',
    name: 'CONE (ROSE GOLD)',
    model: 'CL 910',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '40', cutout: '35', height: '55', beamAngle: '24°', bodyColor: 'RG' },
      { wattage: '12 Watt', outer: '60', cutout: '55', height: '80', beamAngle: '38°', bodyColor: 'RG' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: cone1Img,
  },
  // Page 30 - ROUND LINEA
  {
    id: 'round-linea-cl921',
    name: 'ROUND LINEA',
    model: 'CL 921',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '35', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '105', cutout: '95', height: '35', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: roundlineaImg,
  },
  // Page 31 - LOOP
  {
    id: 'loop-cl922',
    name: 'LOOP',
    model: 'CL 922',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '3 MODULE 6W', outer: '62×32', cutout: '56×26', height: '40', beamAngle: '30°', bodyColor: 'BK/WH' },
      { wattage: '6 MODULE 12W', outer: '108×32', cutout: '102×26', height: '40', beamAngle: '30°', bodyColor: 'BK/WH' },
      { wattage: '12 MODULE 22W', outer: '204×32', cutout: '198×26', height: '40', beamAngle: '30°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: loopImg,
  },
  // Page 31 - LINEA
  {
    id: 'linea-cl923',
    name: 'LINEA',
    model: 'CL 923',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '5 MODULE 10W', outer: '147×44', cutout: '137×35', height: '45', beamAngle: '30°', bodyColor: 'BK/WH' },
      { wattage: '10 MODULE 20W', outer: '281×44', cutout: '271×35', height: '45', beamAngle: '30°', bodyColor: 'BK/WH' },
      { wattage: '15 MODULE 30W', outer: '415×44', cutout: '405×35', height: '45', beamAngle: '30°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: lineaImg,
  },
  // Page 32 - PLATINUM
  {
    id: 'platinum-cl928',
    name: 'PLATINUM',
    model: 'CL 928',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '56', cutout: '50', height: '92', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '75', cutout: '70', height: '106', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '91', cutout: '85', height: '120', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: platinumImg,
  },
  // Page 32 - TRUMP
  {
    id: 'trump-cl929',
    name: 'TRUMP',
    model: 'CL 929',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '68', cutout: '60', height: '62', beamAngle: '25°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '76', beamAngle: '38°', bodyColor: 'BK/WH' },
      { wattage: '12×2 Watt', outer: '162×83', cutout: '155×75', height: '90', beamAngle: '38°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: trumpImg,
  },
  // Page 33 - BRADO
  {
    id: 'brado-cl945',
    name: 'BRADO',
    model: 'CL 945',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '80', cutout: '55', height: '70', beamAngle: '36°', bodyColor: 'WH/BK' },
      { wattage: '12 Watt', outer: '100', cutout: '75', height: '85', beamAngle: '36°', bodyColor: 'WH/BK' },
      { wattage: '20 Watt', outer: '125', cutout: '95', height: '100', beamAngle: '36°', bodyColor: 'WH/BK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: bradoImg,
  },
  // Page 33 - GRACE SHINE
  {
    id: 'grace-shine-cl948',
    name: 'GRACE SHINE',
    model: 'CL 948',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '70', cutout: '65', height: '50', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '83', cutout: '78', height: '65', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '95', cutout: '90', height: '75', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: graceshineImg,
  },
  // Page 34 - PENCIL
  {
    id: 'pencil-cl946',
    name: 'PENCIL',
    model: 'CL 946',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '34', cutout: '32', height: '80', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '44', cutout: '42', height: '90', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: pencilImg,
  },
  // Page 34 - BRISK
  {
    id: 'brisk-cl931',
    name: 'BRISK',
    model: 'CL 931',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '65', cutout: '55', height: '50', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '60', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '105', cutout: '95', height: '75', beamAngle: '36°', bodyColor: 'BK/WH' },
      { wattage: '12×2 Watt', outer: '166×85', cutout: '155×75', height: '62', beamAngle: '36°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: briskImg,
  },
  // Page 35 - DEEP DOWNLIGHT
  {
    id: 'deep-downlight-cl933',
    name: 'DEEP DOWNLIGHT',
    model: 'CL 933',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '12 Watt', outer: '120', cutout: '110', height: '54', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '155', cutout: '145', height: '54', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '24 Watt', outer: '175', cutout: '165', height: '54', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: deepdownlightImg,
  },
  // Page 35 - NEXA
  {
    id: 'nexa-cl934',
    name: 'NEXA',
    model: 'CL 934',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '90', cutout: '75', height: '28', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '16 Watt', outer: '120', cutout: '105', height: '28', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '22 Watt', outer: '170', cutout: '155', height: '28', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '32 Watt', outer: '225', cutout: '205', height: '28', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: nexaImg,
  },
  // Page 36 - GALAXY
  {
    id: 'galaxy-cl947',
    name: 'GALAXY',
    model: 'CL 947',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '80', cutout: '73', height: '45', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '100', cutout: '93', height: '50', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '122', cutout: '115', height: '56', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '24 Watt', outer: '152', cutout: '145', height: '62', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: galaxyImg,
  },
  // Page 36 - GRACE
  {
    id: 'grace-cl949',
    name: 'GRACE',
    model: 'CL 949',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '65', cutout: '55', height: '60', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '70', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '104', cutout: '95', height: '85', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: graceImg,
  },
  // Page 37 - GRACE CYLINDER
  {
    id: 'grace-cylinder-cl950',
    name: 'GRACE CYLINDER',
    model: 'CL 950',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '57', cutout: '-', height: '65', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '77', cutout: '-', height: '90', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '95', cutout: '-', height: '105', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: gracecylinderImg,
  },
  // Page 37 - DAZZLE
  {
    id: 'dazzle-cl951',
    name: 'DAZZLE',
    model: 'CL 951',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '63', cutout: '55', height: '52', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '12 Watt', outer: '85', cutout: '75', height: '65', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '102', cutout: '90', height: '75', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: dazzleImg,
  },
  // Page 38 - PANEL LIGHT
  {
    id: 'panel-light-cl936',
    name: 'PANEL LIGHT',
    model: 'CL 936',
    category: 'panel',
    categoryLabel: 'Panel Lighting',
    specs: [
      { wattage: '8 Watt', outer: '120', cutout: '105', height: '-', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '15 Watt', outer: '170', cutout: '155', height: '-', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '22 Watt', outer: '225', cutout: '210', height: '-', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: panellightImg,
  },
  // Page 38 - SURFACE PANEL LIGHT
  {
    id: 'surface-panel-cl937',
    name: 'SURFACE PANEL LIGHT',
    model: 'CL 937',
    category: 'surface',
    categoryLabel: 'Surface Lighting',
    specs: [
      { wattage: '8 Watt', outer: '120', cutout: '-', height: '35', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '15 Watt', outer: '170', cutout: '-', height: '35', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '22 Watt', outer: '225', cutout: '-', height: '35', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: surfacepanellightImg,
  },
  // Page 39 - NEXA SURFACE
  {
    id: 'nexa-surface-cl952',
    name: 'NEXA SURFACE',
    model: 'CL 952',
    category: 'surface',
    categoryLabel: 'Surface Lighting',
    specs: [
      { wattage: '16 Watt', outer: '120', cutout: '-', height: '40', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '24 Watt', outer: '175', cutout: '-', height: '40', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: nexasurfaceImg,
  },
  // Page 39 - CROMA
  {
    id: 'croma-cl953',
    name: 'CROMA',
    model: 'CL 953',
    category: 'surface',
    categoryLabel: 'Surface Lighting',
    specs: [
      { wattage: '12 Watt', outer: '85', cutout: '-', height: '45', beamAngle: '-', bodyColor: 'BK/WH' },
      { wattage: '18 Watt', outer: '100', cutout: '-', height: '45', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: cromaImg,
  },
  // Page 40 - AMOR
  {
    id: 'amor-cl954',
    name: 'AMOR',
    model: 'CL 954',
    category: 'outdoor',
    categoryLabel: 'Outdoor Lighting',
    specs: [
      { wattage: '10 Watt', outer: '65×115×145', cutout: '-', height: '-', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '20 Watt', outer: '65×140×145', cutout: '-', height: '-', beamAngle: '24°', bodyColor: 'BK/WH' },
      { wattage: '30 Watt', outer: '78×155×150', cutout: '-', height: '-', beamAngle: '24°', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: amorImg,
  },
  // Page 40 - EYE BALL SURFACE
  {
    id: 'eye-ball-surface-cl955',
    name: 'EYE BALL SURFACE',
    model: 'CL 955',
    category: 'surface',
    categoryLabel: 'Surface Lighting',
    specs: [
      { wattage: '12 Watt', outer: '75', cutout: '-', height: '120', beamAngle: '-', bodyColor: 'BK/WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: eyeballsurfaceImg,
  },
  // Page 41 - LED 2*2 PANEL LIGHT
  {
    id: 'led-2x2-panel-cl938',
    name: 'LED 2×2 PANEL LIGHT',
    model: 'CL 938',
    category: 'panel',
    categoryLabel: 'Panel Lighting',
    specs: [
      { wattage: '38 Watt', outer: '595', cutout: '-', height: '-', beamAngle: '-', bodyColor: 'WH' },
      { wattage: '48 Watt', outer: '595', cutout: '-', height: '-', beamAngle: '-', bodyColor: 'WH' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: ledpanelImg,
  },
  // Page 41 - GLOSSIER
  {
    id: 'glossier-cl976',
    name: 'GLOSSIER',
    model: 'CL 976',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '61', cutout: '55', height: '62', beamAngle: '24°', bodyColor: 'BK/WH/GBK' },
      { wattage: '12 Watt', outer: '81', cutout: '75', height: '78', beamAngle: '36°', bodyColor: 'BK/WH/GBK' },
      { wattage: '18 Watt', outer: '101', cutout: '95', height: '90', beamAngle: '36°', bodyColor: 'BK/WH/GBK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: glossierImg,
  },
  // Page 42 - DELTA PRO
  {
    id: 'delta-pro-cl971',
    name: 'DELTA PRO',
    model: 'CL 971',
    category: 'architectural',
    categoryLabel: 'Architectural Lighting',
    specs: [
      { wattage: '7 Watt', outer: '63', cutout: '58', height: '61', beamAngle: '24°', bodyColor: 'BK/RG/GBK' },
      { wattage: '12 Watt', outer: '84', cutout: '75', height: '75', beamAngle: '36°', bodyColor: 'BK/RG/GBK' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K', '3-in-1'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: deltaproImg,
  },
  // Page 42 - CERA
  {
    id: 'cera-cl985',
    name: 'CERA',
    model: 'CL 985',
    category: 'decorative',
    categoryLabel: 'Decorative Lighting',
    specs: [
      { wattage: '7 Watt', outer: '73', cutout: '50', height: '-', beamAngle: '-', bodyColor: 'BK/WH/GBK/RG' },
      { wattage: '12 Watt', outer: '94', cutout: '50', height: '-', beamAngle: '-', bodyColor: 'BK/WH/GBK/RG' },
      { wattage: '18 Watt', outer: '120', cutout: '60', height: '-', beamAngle: '-', bodyColor: 'BK/WH/GBK/RG' },
    ],
    colorTemps: ['3K', '4K', '5K', '6K'],
    features: { saving: '86%', pf: '>0.95', eco: true },
    image: ceraImg,
  },
];

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'decorative', label: 'Decorative' },
  { id: 'architectural', label: 'Architectural' },
  { id: 'trimless', label: 'Trimless' },
  { id: 'surface', label: 'Surface' },
  { id: 'panel', label: 'Panel' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'custom', label: 'Custom' },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleInquiry = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppInquiry = (productName: string, model: string) => {
    const message = encodeURIComponent(`Hello, I'm interested in the ${productName} - ${model} lighting fixture. Please share more details.`);
    window.open(`https://wa.me/919574699881?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="label-uppercase text-primary mb-4 block">Our Products</span>
          <h2 className="heading-section text-foreground mb-6">
            Lighting
            <br />
            <span className="italic">Collection</span>
          </h2>
          <p className="text-muted-foreground">
            Premium LED lighting solutions with precise specifications, 
            engineered for architectural excellence and energy efficiency.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>{products.length} Products</strong> in our collection
          </p>
        </div>

        {/* Category Filter - Tabs Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 lg:mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProductCategory)}
              className={`px-6 py-3 text-sm tracking-wide transition-all duration-300 rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-foreground text-background'
                  : 'border border-border text-muted-foreground hover:border-foreground hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products - Hero Card Layout (Vertical Scroll) */}
        <div className="space-y-16 lg:space-y-24">
          {filteredProducts.map((product) => (
            <article 
              key={product.id} 
              className="bg-background border border-border rounded-sm overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Product Info */}
                <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
                  {/* Category & Model */}
                  <div className="mb-6">
                    <span className="label-uppercase text-primary/60 text-xs block mb-2">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-light text-foreground mb-2">
                      {product.name}
                    </h3>
                    <span className="text-muted-foreground text-sm tracking-wider">
                      {product.model}
                    </span>
                  </div>

                  {/* Product Image */}
                  {product.image && (
                    <div className="mb-8">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - ${product.model}`}
                        className="w-full max-w-xs mx-auto h-auto object-contain"
                      />
                    </div>
                  )}

                  <div className="line-separator mb-8" />

                  {/* Color Temperature Icons */}
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block">
                      Color Temperature
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.colorTemps.map((temp) => (
                        <span 
                          key={temp} 
                          className="px-3 py-1.5 bg-secondary text-foreground text-xs tracking-wider rounded-sm"
                        >
                          {temp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Feature Icons */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="text-center">
                      <span className="text-lg font-semibold text-foreground block">{product.features.saving}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Saving</span>
                    </div>
                    <div className="text-center">
                      <span className="text-lg font-semibold text-foreground block">PF {product.features.pf}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Power Factor</span>
                    </div>
                    {product.features.eco && (
                      <div className="text-center">
                        <span className="text-lg font-semibold text-primary block">ECO</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">Friendly</span>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-8 border-t border-border">
                    <Button 
                      variant="luxury" 
                      onClick={handleInquiry}
                      className="flex-1"
                    >
                      Request Details
                    </Button>
                    <Button 
                      variant="luxuryOutline" 
                      onClick={() => handleWhatsAppInquiry(product.name, product.model)}
                      className="flex-1"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enquire on WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Right Side - Technical Specifications Table */}
                <div className="bg-secondary/30 p-8 lg:p-12 xl:p-16">
                  <h4 className="font-serif text-xl text-foreground mb-6">
                    Technical Specifications
                  </h4>

                  {/* Specifications Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="py-3 px-2 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Wattage</th>
                          <th className="py-3 px-2 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Outer</th>
                          <th className="py-3 px-2 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Cutout</th>
                          <th className="py-3 px-2 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Height</th>
                          <th className="py-3 px-2 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Beam</th>
                          <th className="py-3 px-2 text-left text-xs uppercase tracking-wider text-muted-foreground font-medium">Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specs.map((spec, idx) => (
                          <tr key={idx} className="border-b border-border/50">
                            <td className="py-4 px-2 text-foreground font-medium">{spec.wattage}</td>
                            <td className="py-4 px-2 text-muted-foreground">{spec.outer}</td>
                            <td className="py-4 px-2 text-muted-foreground">{spec.cutout}</td>
                            <td className="py-4 px-2 text-muted-foreground">{spec.height}</td>
                            <td className="py-4 px-2 text-muted-foreground">{spec.beamAngle}</td>
                            <td className="py-4 px-2 text-muted-foreground">{spec.bodyColor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Dimension Note */}
                  <p className="text-xs text-muted-foreground mt-6 italic">
                    All dimensions in millimeters (mm)
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}