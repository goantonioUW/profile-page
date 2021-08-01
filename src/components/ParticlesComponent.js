import React from 'react'
import Particles from 'react-particles-js';

function ParticlesComponent() {
    return (
            <Particles
            className="particles-canvas"
                params={{
                    particles: {
                    number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 900
                }
                },
                shape: {
                type: "triangle",
                stroke: {
                    width: 6,
                    color: "BE00FE"
                }
                }
            }
            }}
            />
    )
}

export default ParticlesComponent
