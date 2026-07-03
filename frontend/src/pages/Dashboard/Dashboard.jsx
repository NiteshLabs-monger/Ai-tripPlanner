import React from 'react'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Bell, Search, SunIcon, Timer} from "lucide-react"
import { AvatarGroup } from '@/components/ui/avatar'
import {Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const Dashboard = () => {
  return (
    <div>
      <header className='flex justify-between'>
        <search>
          <Input type="text" placeholder="Search..." />
          <Button><Search className="h-4 w-4" /></Button>
        
        </search>
        <div className="mem">
          <Bell/>
          <AvatarGroup>

          </AvatarGroup>

        </div>

      </header>
      <main>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">summer romance in paris</h2>
            <h4 className="text-muted-foreground">
              Explore the city of love with our curated itinerary
            </h4>
          </CardHeader>
          <CardFooter>
            <div>
              <SunIcon />
              <p>Sunny</p>
            </div>
            <div className="nextdest">
              <Timer/>
              <p>Next Destination: Rome</p>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <Card>
            <CardHeader>
              <CardTitle>Todays Itinerary</CardTitle>

            </CardHeader>
          </Card>
        </Card>

      </main>
    </div>
  )
}

export default Dashboard

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      