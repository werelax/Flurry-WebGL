// By Roy Curtis
// Based off original code from https://github.com/calumr/flurry

/**
 * Confusing class; might be holding four quads per particle, rather than a single quad
 * @constructor */
Flurry.SmokeParticle = function()
{
    'use strict';

    /**
     * ???: Holds the RGBA for four quads (first index component, second index quad)
     * e.g. [0][2] gets the red component of the third quad
     * @type {Float32Array[]}
     */
    this.color = ArrayOf.Vector4F(4);
    /**
     * ???: This keeps the XYZ positions of each quads (first index component, second index quad)
     * e.g. [0][2] gets the X float of the third quad
     * @type {Float32Array[]}
     */
    this.pos      = ArrayOf.Vector4F(3);
    /** @type {Float32Array[]} */
    this.oldPos   = ArrayOf.Vector4F(3);
    /** @type {Float32Array[]} */
    this.deltaPos = ArrayOf.Vector4F(3);

    /**
     * ???: This keeps track of the alive state of each quad
     * @type {Uint32Array}
     */
    this.dead  = Vector4I();
    /** @type {Uint32Array} */
    this.frame = Vector4I();
    /** @type {Float32Array} */
    this.time  = Vector4F();
};